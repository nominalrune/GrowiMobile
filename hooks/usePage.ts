import { useEffect, useRef, useState } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import useSecureStore from './useSecureStore';
import useStorage from './useStorage';
import PageContent from '../services/GrowiAPI/PageContent';
import useAuthStore from './useAuthStore';

export default function usePage(path: string) {
	const promise = useRef<Promise<any>>();
	const [page, setPage] = useState<PageContent>();
	const [api, setApi] = useState<GrowiAPI>();
	async function initialize() {
		const { getApi } = useAuthStore();
		const api = await getApi();
		setApi(api);
		const result = await api.fetchDocumentContent(path);
		setPage(result.page);
	}
	function update(content: string) {
		setPage(page => page ? ({ ...page, revision: { ...page.revision, body: content } }) : undefined);
	}
	async function save() {
		if (!api || !page) { return; }
		const result = await api.savePageContent(page);
		setPage({ ...result.page, revision: result.revision });
	}
	useEffect(() => {
		promise.current = initialize();
	}, []);
	return { page, update, save };
}