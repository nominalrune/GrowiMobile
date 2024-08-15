import { useState } from 'react';
import useSecureStore from './useSecureStore';
import useStorage from './useStorage';
import GrowiAPI from '../services/GrowiAPI/GrowiAPI';

export default function useAuthStore() {
	const secureStore = useSecureStore();
	const storage = useStorage();
	async function set(url: string, token: string) {
		await storage.set("url", url);
		await secureStore.set("token", token);
	}
	async function check(url: string, token: string) {
		const api = new GrowiAPI(url, token);
		try {
			await api.fetchDocuments();
		} catch {
			throw new Error('接続エラー。urlかトークンのどちらかが間違っている可能性があります。');
		}
		await set(url, token);
		return true;
	}
	async function getApi() {
		const url = await storage.get("url");
		const token = await secureStore.get("token");
		if (!url || !token) { throw new Error('url or token not set.'); }
		const api = new GrowiAPI(url, token,)
		return api;
	}
	return { check, getApi };
}