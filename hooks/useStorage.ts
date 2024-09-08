import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage() {
	async function set(key: string, value: string | number | boolean | object) {
		try {
			const jsonValue = typeof value==='object'?JSON.stringify(value):value.toString();
			await AsyncStorage.setItem(key, jsonValue);
		} catch (e) {
			// saving error
		}
	};
	async function get(key: string) {
		return await AsyncStorage.getItem(key);
	}
	async function getObject<T>(key: string) {
		try {
			const obj = JSON.parse(await AsyncStorage.getItem(key) ?? '');
			return obj as T;
		} catch {
			return undefined;
		}
	}
	async function remove(key: string) {
		await AsyncStorage.removeItem(key);
	}
	return { get, getObject, set, remove };
}