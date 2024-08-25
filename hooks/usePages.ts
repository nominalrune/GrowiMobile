import { useEffect, useState } from 'react';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import Page from '../services/GrowiAPI/Page';
import useApi from './useApi';

export default function usePages() {
	const { api } = useApi();
	const [pages, setPages] = useState<Page[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		console.log('usePages(), api updated', api);
		if (!api) {
			console.info('usePages, api not set');
			return;
		}
		setLoading(true);
		console.log('start fetchDocuments')
		api.fetchDocuments().then(pages => {
			setPages(pages);
			setLoading(false);
			//  console.log('pages', pages);
		}).catch(e=>{
			setLoading(false);
		});
	}, [api]);
	async function refresh() {
		console.log('usePages.refresh start');
		if (!api) { 
			console.log('usePages.refresh: no api');
			return; 
		}
		setLoading(true);
		const result = await api.fetchDocuments();
		setPages(result);
		setLoading(false);
		console.log('usePages.refresh finished. ', result);
	}
	return { pages, refresh, loading };
}