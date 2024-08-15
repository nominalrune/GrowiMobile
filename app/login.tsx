import { TextInput, View } from 'react-native';
import SView from '../components/Styled/SView';
import SText from '../components/Styled/SText';
import { useState, useEffect } from 'react';
import useAuthStore from '../hooks/useAuthStore';
import { router } from 'expo-router';
export default function Login() {
	const [url, setUrl] = useState("");
	const [token, setToken] = useState("");
	const [message, setMessage] = useState("");
	const { check } = useAuthStore();
	useEffect(() => {
		check(url, token)
			.then(() => {
				router.push('/');
			})
			.catch(e => {
				if (e instanceof Error) {
					setMessage(e.message);
				}
			});
	}, [url, token]);
	return <>
		<SText>アクセス情報の入力</SText>
		<SText>Site URL<TextInput onChangeText={text => setUrl(text)} /></SText>
		<SText>Your API Token<TextInput onChangeText={setToken} /></SText>
		<SText className='text-slate-600'>{message}</SText>
	</>;
}