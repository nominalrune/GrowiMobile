import { useEffect, useState } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import Page from '../services/GrowiAPI/Page';
import useApi from './useApi';

export default function usePages() {
	const { api } = useApi();
	const [pages, setPages] = useState<Page[]>([]);
	useEffect(() => {
		console.log('usePages(), api updated', api);
		if (!api) {
			console.info('usePages, api not set');
			return;
		}
		api.fetchDocuments().then(pages => {
			setPages(pages);
			//  console.log('pages', pages);
		});
	}, [api]);
	async function refresh() {
		console.log('usePages.refresh');
		if (!api) { return; }
		const result = await api.fetchDocuments();
		setPages(result);
		console.log('usePages.refresh');
	}
	return { pages, refresh };
}