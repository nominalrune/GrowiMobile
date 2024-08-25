import { useEffect, useState } from 'react';
import IUser from '../services/GrowiAPI/IUser';
import useStorage from './useStorage';
import useApi from './useApi';
import useSecureStore from './useSecureStore';

export default function useUser() {
	const [user, setUser] = useState<IUser>();
	const storage = useStorage();
	const { api } = useApi();
	useEffect(() => {
		(async () => {
			const user = await storage.getObject<IUser>('user');
			console.log('user in store',user)
			if (user) {
				setUser(user);
			} else {
				fetchUser();
			}
		})();
		const i = setInterval(()=>{console.log(Date(),'user',user)},100_000)
		return ()=>{clearInterval(i) }
	}, []);
	async function fetchUser() {
		if (!api) throw new Error('api no set');
		const url = await storage.get('url');
		const _user = (await api.fetchUser()).currentUser;
		const user = { ..._user, imageUrlCached: url + _user.imageUrlCached, apiToken: undefined };
		await storage.set('user', user);
		setUser(user);
	}
	return { user, fetchUser };
}