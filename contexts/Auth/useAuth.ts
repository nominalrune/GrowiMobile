import { useContext, useEffect, useState } from 'react';
import useSecureStore from '../../hooks/useSecureStore';
import useStorage from '../../hooks/useStorage';
import GrowiAPI from '../../services/GrowiAPI/GrowiAPI';
import IUser from '../../services/GrowiAPI/IUser';
/**
 * @prop url: url of growi
 * @prop token: token of growi
 * @prop loading: loading state
 * @prop user: user of growi
 * @returns 
 */
export default function useAuth() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<IUser | null>(null);
	const secureStore = useSecureStore();
	const storage = useStorage();
	const [url, setUrl] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		getAuth().then(() => {
			setLoading(false);
		});
	}, []);
	/**
	 * get url and token from secureStore and storage
	 */
	async function getAuth() {
		const url = await storage.get('url');
		setUrl(url);
		const token = await secureStore.get('token');
		setToken(token);
		const user = await storage.getObject<IUser>('user') ?? null;
		setUser(user);
		console.log('useAuth.getAuth: url', url, "token", token);
		// if (url && token && setApi) setApi(url, token); // needed?? useApi hook is used instead
	}
	/**
	 * set url and token to secureStore and storage
	 * @param url 
	 * @param token 
	 */
	async function setAuth(url: string, token: string) {
		console.log('useAuth, setAuth', url, token);
		await storage.set("url", url.replace(/\/$/, ''));
		setUrl(url);
		await secureStore.set("token", token);
		setToken(token);
		// if (setApi) setApi(url, token); // useApi do that
		console.log('also set to the context');
	}
	async function login(url: string, email: string, password: string) {
		const result = await GrowiAPI.login(url, email, password).catch((error) => {
			throw new Error('接続エラー。urlかトークンのどちらかが間違っている可能性があります。' + error);
		});
		const user = { ...result, apiTolen: undefined, imageUrlCached: new URL(result?.imageUrlCached, url).toString() };
		await storage.set('user', user);
		setUser(user);
		await setAuth(url, result.apiToken);
		// setApi && setApi(url, token); // useApi do that
		return user;
	}
	async function logout() {
		await storage.remove('user');
		await storage.remove('url');
		await secureStore.remove('token');
		setUser(null);
		setUrl(null);
		setToken(null);
	}
	return { user, url, token, loading, login, logout };
}