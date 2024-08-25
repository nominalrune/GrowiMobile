import { useContext, useState } from 'react';
import useSecureStore from './useSecureStore';
import useStorage from './useStorage';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';
import useApi from './useApi';

export default function useAuthStore() {
	const { set: _set } = useApi();
	const secureStore = useSecureStore();
	const storage = useStorage();
	async function get() {
		const url = await storage.get('url');
		const token = await secureStore.get('token');
		console.log('useAuthStore.get: url', url, "token", token);
		return { url, token };
	}
	async function set(url: string, token: string) {
		console.log('useAuthStore, save', url, token);
		await storage.set("url", url);
		await secureStore.set("token", token);
		if (_set) _set(url, token);
		console.log('also set to the context');
	}
	async function checkAndSave(url: string, token: string) {
		console.log('useAuthStore, check', url, token);
		const api = new GrowiAPI(url, token);
		try {
			const _user = (await api.fetchUser()).currentUser;
			const user = {
				..._user,
				apiToken: undefined,
				imageUrlCached: url + _user.imageUrlCached
			};
			await storage.set('user', user);
		} catch {
			throw new Error('接続エラー。urlかトークンのどちらかが間違っている可能性があります。');
		}
		await set(url, token);
		return true;
	}
	async function getApi() {
		const { url, token } = await get();
		console.log('useAuthStore, getApi', url, token);
		if (!url || !token) { throw new Error('url or token not set.'); }
		const api = new GrowiAPI(url, token,);
		return api;
	}
	return { get, checkAndSave, getApi };
}