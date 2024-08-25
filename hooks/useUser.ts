import { useEffect, useState } from 'react';
import IUser from '../services/GrowiAPI/IUser';
import useStorage from './useStorage';

export default function useUser() {
	const [user, setUser] = useState<IUser>();
	const storage = useStorage();
	useEffect(() => {
		async ()=>{
			const user = await storage.getObject<IUser>('user');
			setUser(user);
		}
	}, []);
	return { user };
}