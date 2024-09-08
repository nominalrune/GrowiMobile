import { TextInput, Text, View, Pressable, type TextInputProps } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, router } from 'expo-router';
import useAuth from '../../contexts/Auth/useAuth';
export default function Login() {
	const [url, setUrl] = useState<string | null>(null);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState("");
	const { user, url: _url, login } = useAuth();
	useEffect(() => {
		if (_url) {
			setUrl(_url);
		}
		if (user) {
			setEmail(user.email);
		}
	}, [user, _url]);
	useEffect(() => {
		if (!url || !email || !password) { return; }
		login(url, email, password).then(() => {
			setMessage("ログインに成功しました。");
		}).catch((error) => {
			setMessage("ログインに失敗しました。" + error);
		});
	}, [url, email, password]);
	return <View className='flex flex-col gap-4 m-2'>
		<Text className='text-2xl'>アクセス情報の入力</Text>
		{([
			{ label: 'Site URL', value: url || '', setValue: setUrl, textContentType: 'URL', keyboardType: 'url', secureTextEntry: false },
			{ label: 'Email', value: email || '', setValue: setEmail, textContentType: 'emailAddress', keyboardType: 'email-address', secureTextEntry: false },
			{ label: 'Password', value: password || '', setValue: setPassword, textContentType: 'password', secureTextEntry: true, keyboardType: 'default' }
		] as const).map(({ label, value, setValue, textContentType, keyboardType, secureTextEntry }) => (
			<Input
				key={label}
				label={label}
				value={value}
				setValue={setValue}
				textContentType={textContentType}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
			/>
		))}
		{message ? <Text className='text-slate-600'>{message}</Text> : <></>}
		<Link href='/'>
			<Pressable onPress={() => router.push('/user')} className='px-2 py-1 rounded bg-emerald-400 hover:bg-emerald-300'><Text>次へ</Text></Pressable>
		</Link>
	</View>;
}

function Input({ label, value, setValue, textContentType, keyboardType, secureTextEntry }: { label: string, value: string, setValue: (value: string) => void, textContentType: TextInputProps['textContentType'], keyboardType: TextInputProps['keyboardType'], secureTextEntry: TextInputProps['secureTextEntry'] }) {
	return <View key={label} className='flex justify-start'>
		<Text>{label}</Text>
		<TextInput
			value={value}
			textContentType={textContentType}
			keyboardType={keyboardType}
			secureTextEntry={secureTextEntry}
			className='max-w-xs px-1 border border-slate-500 rounded'
			onChangeText={setValue}
		/>
	</View>;
}