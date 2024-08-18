import { useEffect, useRef, useState } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import useSecureStore from './useSecureStore';
import useStorage from './useStorage';
import PageContent from '../services/GrowiAPI/PageContent';
import useAuthStore from './useAuthStore';
import useHistory from './useHistory';

export default function usePage(path: string) {
	const promise = useRef<Promise<any>>();
	// const [page, setPage] = useState<PageContent>();
	const { current, push, undo, redo, reset } = useHistory<PageContent>();
	const [api, setApi] = useState<GrowiAPI>();
	async function initialize() {
		const { getApi } = useAuthStore();
		const api = await getApi();
		setApi(api);
		const result = await api.fetchDocumentContent(path);
		// setPage(result.page);
		push(result.page);
	}
	function update(content: string) {
		// setPage(page => page ? ({ ...page, revision: { ...page.revision, body: content } }) : undefined);
		if (current) {
			push({ ...current, revision: { ...current.revision, body: content } });
		}
	}
	async function save() {
		if (!api || !current) { return; }
		const result = await api.savePageContent(current);
		const resultPage = { ...result.page, revision: result.revision };
		reset(resultPage);
		// setPage(resultPage);
	}
	useEffect(() => {
		promise.current = initialize();
	}, []);
	return { page: current, update, save, undo, redo, reset };
}