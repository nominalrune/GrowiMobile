import { TextInput, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import useAuthStore from '../../hooks/useAuthStore';
import { Link, router } from 'expo-router';
import GrowiAPI from '../../services/GrowiAPI/GrowiAPI';
import useStorage from '../../hooks/useStorage';
export default function Login() {
	const [url, setUrl] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState("");
	const { checkAndSave, get } = useAuthStore();
	useEffect(() => {
		(async () => {
			const { token } = await get();
			token && setToken(token);
		})();
	}, []);
	const storage = useStorage();
	useEffect(() => {
		if (!url || !email || !password) { return; }
		GrowiAPI.login(url, email, password).then(async ({currentUser:r}) => {
			console.log(r);
			setMessage('login success');
			const user = {...r, apiTolen:undefined, imageUrlCached:url+r.imageUrlCached};
			await storage.set('user', user)
		});
	}, [url, email, password]);
	return <View className='flex flex-col gap-4 m-2'>
		<Text className='text-2xl'>アクセス情報の入力</Text>
		<View className='flex justify-start'>
			<Text>Site URL</Text>
				<TextInput 
				value={url}
				textContentType='URL'
				keyboardType='url'
				 className='max-w-xs px-1 border  border-slate-500 rounded' onChangeText={setUrl} />
				
		</View>
		<View className='flex justify-start'>
			<Text>Email</Text>
			{<TextInput
			 value={email} 
			 textContentType='emailAddress'
			 keyboardType='email-address'
			 className='max-w-xs px-1 border border-slate-500 rounded' onChangeText={setEmail} />
			}
		</View>
		<View className='flex justify-start'>
			<Text>Password</Text>
			<TextInput
			 value={password} 
			 className='max-w-xs px-2 border border-slate-500 rounded' 
			 onChangeText={setPassword}
			 secureTextEntry={true}
			 textContentType='password'
			  />
		</View>
		{message ? <Text className='text-slate-600'>{message}</Text> : <></>}
		<Link href='/'>
			<Pressable onPress={() => router.push('/')} className='bg-emerald-400 hover:bg-emerald-300'><Text>次へ</Text></Pressable>
		</Link>
	</View>;
}