import { ReactNode, useEffect, useState } from 'react';
import ApiContext from '../contexts/Auth/ApiContext';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

export default function ApiProvider({ children, }: { children: ReactNode; }) {
	const [api, setApi] = useState<GrowiAPI | null>(null);
	async function set(url: string, token: string) {
		console.info('ApiProvider set called.', url, token);
		const api = new GrowiAPI(url, token);
		setApi(api);
		console.log("ApiProvider, apis set to the context", api);
	}

	return <ApiContext.Provider value={{ api, set }}>
		{children}
	</ApiContext.Provider>;
}