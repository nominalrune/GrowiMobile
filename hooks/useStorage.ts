import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage() {
	async function set(key: string, value: string | number | boolean | object) {
		try {
			const jsonValue = JSON.stringify(value);
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
	return { get, getObject, set };
}