import PageListResponse from './PageListResponse';
import PageContent from './PageContent';
import Revision from './Revision';
import CurrentUserResponse from './CurrentUserResponse';

export default class GrowiAPI {
	private setting: { url: string, token: string; };
	constructor(url: string, token: string) {
		this.setting = { url, token };
	}
	static async login(url: string, email: string, pass: string) {
		function getUrl(path: string) {
			return new URL(`_api/v3/${path}`, url);
		}
		const loginResponse = await fetch(getUrl('login'), {
			method: "POST",
			headers: {
				'Content-Type': "application/json",
			},
			body: JSON.stringify({
				loginForm: {
					username: email,
					password: pass,
				}
			}),
		});
		if (!loginResponse.ok) {
			throw new Error('login failed: ' + loginResponse.statusText + ", body: " + await loginResponse.text());
		}
		const userResponse = await fetch(getUrl('personal-setting'));
		const user = (await userResponse.json()).currentUser as CurrentUserResponse['currentUser'];
		console.log("me result", userResponse);
		return user;
	}
	private async fetch<T>(path: string, method: 'GET' | 'POST' | 'PUT', urlParam?: object, body?: object): Promise<T> {
		console.log("url:", this.setting.url, 'path', path, 'method', method, 'urlParam', urlParam);
		let _url: URL;
		try {
			_url = new URL(`_api/v3/${path}`, this.setting.url);
		} catch (e) {
			console.info("error", e);
			throw e;
		}
		_url.searchParams.set('access_token', this.setting.token);
		if (urlParam) {
			Object.entries(urlParam).forEach(([k, v]) => {
				_url.searchParams.set(k, v);
			});
		}
		console.log('final url', _url.toString());

		const _body = body ? JSON.stringify(body) : undefined;
		const result = await fetch(_url.toString(), {
			method: method,
			body: _body,
			headers: {
				'Content-Type': "application/json",
			}
		});

		if (!result.ok) {
			throw new Error(`Fetch Status error. ${result.status} ${result.statusText}, url:${_url.toString()} | ${await result.text()}`);
		}
		console.log('Fetch success.');
		return await result.json() as T;
	}
	async fetchUser(){
		const user = await this.fetch<CurrentUserResponse>('personal-setting','GET');
		return user;
	}
	async fetchDocuments() {
		const result = await this.fetch<PageListResponse>(`pages/recent`, 'GET');
		return result.pages;
	}

	async fetchDocumentContent(path: string) {
		const encodedPath = encodeURI(path);
		const response = await this.fetch<{ page: PageContent; }>(`page`, 'GET', { path: encodedPath });
		return response;
	}
	async savePageContent(page: PageContent) {
		const response = await this.fetch<{ page: Omit<PageContent, 'revision'>; revision: Revision; }>('page', 'PUT', undefined, {
			pageId: page._id,
			revisionId: page.revision._id,
			body: page.revision.body,
		});
		console.log('saveDocumentContetnt response:' + JSON.stringify(response));
		return response;
	}
}
