import { Link, router } from 'expo-router';
import Button from '../../components/Base/Button';
import { Text, View, Image } from 'react-native';
import useAuthStore from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';

export default function User() {
	const { get } = useAuthStore();
	const [s, setS] = useState<{ url: string, token: string; }>();
	const { user, fetchUser } = useUser();
	useEffect(() => {
		get().then(r => {
			setS(r);
		});
	}, []);
	async function refreshProfile() {
		const result = await fetchUser();
		console.log('fetched user', result);
	}
	return <View className='flex m-2 mx-4 '>
		{user ? <>
			<Text className='text-lg'>{user.name}</Text>
			<Image className='w-24 h-24 border shadow bg-white' source={{ uri: user.imageUrlCached }} alt='user_icon' />
			<Image className='w-24 h-24 bg-gray-400' src='data:image/png;UTF-8,https://wiki.paulsenglish.jp/attachment/66bd7c4a5a9c2c8eef0f0ffc' />
		</> : <Text>loading</Text>}
		<Text>url: <Link className='text-blue-700 underline' href={s?.url ?? ''}>{s?.url}</Link></Text>
		<Text>token: {s?.token}</Text>
		<Button onPress={() => router.push('user/login')}><Text>login</Text></Button>
		<Button onPress={() => refreshProfile()}><Text>refresh profile</Text></Button>
	</View>;
}