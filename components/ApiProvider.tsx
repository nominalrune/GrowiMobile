import { ReactNode, useEffect, useState } from 'react';
import ApiContext from '../contexts/ApiContext';
import useAuthStore from '../hooks/useAuthStore';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

export default function ApiProvider({ children }: { children: ReactNode; }) {
	const [api, setApi] = useState<GrowiAPI | null>(null);
	const { getApi } = useAuthStore();
	useEffect(() => {
		getApi().then(api => {
			setApi(api);
		});
	}, []);

	return <ApiContext.Provider value={api}>
		{children}
	</ApiContext.Provider>;
}