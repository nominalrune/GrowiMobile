import { ReactNode, useEffect, useState } from 'react';
import ApiContext from '../contexts/ApiContext';
import useAuthStore from '../hooks/useAuthStore';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

export default function ApiProvider({ children, }: { children: ReactNode; }) {
	const [api, setApi] = useState<GrowiAPI | null>(null);
	const { getApi, checkAndSave } = useAuthStore();
	useEffect(() => {
		console.log('ApiProvider, useEffect');
		getApi().then(api => {
			console.log('ApiProvider, getApi finished', api);
			setApi(api);
		});
		// const i = setInterval(()=>{
		// 	console.log("ApiProvider interval api:", api);
		// },10000);
		// return ()=>{clearInterval(i)};
	}, []);
	async function set(url: string, token: string) {
		console.info('ApiProvider set called.', url, token);
		await checkAndSave(url, token);
		const api = new GrowiAPI(url, token);
		setApi(api);
		console.log("ApiProvider, apis set to the context", api);
	}

	return <ApiContext.Provider value={{ api, set }}>
		{children}
	</ApiContext.Provider>;
}