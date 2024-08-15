import { ReactNode, useEffect, useState } from 'react';
import ApiContext from '../contexts/ApiContext';
import useAuthStore from '../hooks/useAuthStore';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

export default function ApiProvider({ children,  }: { children: ReactNode;  }) {
	const [api, setApi] = useState<GrowiAPI | null>(null);
	const { getApi, check } = useAuthStore();
	useEffect(() => {
		console.log('ApiProvider, useEffect')
		getApi().then(api => {
			console.log('ApiProvider, getApi finished', api)
			setApi(api);
		});
	}, []);
	async function set(url: string, token: string) {
		if (await check(url, token)) {
			const api = await getApi();
			setApi(api);
		}
	}
	return <ApiContext.Provider value={{ api, set }}>
		{children}
	</ApiContext.Provider>;
}