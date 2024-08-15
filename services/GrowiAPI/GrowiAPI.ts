import PageListResponse from './PageListResponse';
import PageContent from './PageContent';
import Revision from './Revision';

export default class GrowiAPI {
	private setting: { url: string, token: string; };
	constructor(url: string, token: string) {
		this.setting = { url, token };
	}
	private async fetch<T>(path: string, method: 'GET' | 'POST' | 'PUT', urlParam?: object, body?: object): Promise<T> {
		const _url = new URL(this.setting.url);
		_url.pathname = `_api/v3/${path}`;
		_url.searchParams.set('access_token', this.setting.token);
		if (urlParam) {
			Object.entries(urlParam).forEach(([k, v]) => {
				_url.searchParams.set(k, v);
			});
		}

		const _body = body ? JSON.stringify(body) : undefined;

		const result = await fetch(_url.toString(), {
			method: method,
			body: _body,
			headers: {
				'Content-Type': "application/json",
			}
		});
		if (!result.ok) {
			throw new Error(`Fetch error. ${result.status} ${result.statusText}, url:${_url.toString()} | ${await result.text()}`);
		}
		return await result.json() as T;
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
