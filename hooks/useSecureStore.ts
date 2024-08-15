import * as SecureStore from 'expo-secure-store';
export default function useSecureStore() {
	async function set(key:string, value:string) {
		await SecureStore.setItemAsync(key, value);
	}
	async function get(key:string) {
		let result = await SecureStore.getItemAsync(key);
		return result;
	}
	return {set, get};
}