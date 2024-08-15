import { TextInput, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import useAuthStore from '../hooks/useAuthStore';
import { Link, router } from 'expo-router';
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
	return <View className='flex flex-col gap-4 m-2'>
		<Text className='text-2xl'>アクセス情報の入力</Text>
		<View className='flex justify-start'>
			<Text>Site URL</Text>
			<TextInput className='max-w-xs border outline-2 border-slate-800 rounded' onChangeText={setUrl} />
		</View>
		<View className='flex justify-start'>
			<Text>Your API Token</Text>
			<TextInput className='max-w-xs border outline-2 border-slate-800 rounded' onChangeText={setToken} />
		</View>
		{message ? <Text className='text-slate-600'>{message}</Text> : <></>}
		<Link href='/'>
			<Pressable onPress={() => router.push('/')} className='bg-emerald-400 hover:bg-emerald-300'><Text>次へ</Text></Pressable>
		</Link>
	</View>;
}