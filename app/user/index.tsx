import { Link, router } from 'expo-router';
import Button from '../../components/Base/Button';
import { Text, View, Image } from 'react-native';
import useAuthStore from '../../hooks/useAuthStore';
import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';

export default function User() {
	const { get } = useAuthStore();
	const [s, setS] = useState<{ url: string, token: string; }>();
	const { user } = useUser();
	useEffect(() => {
		get().then(r => {
			setS(r);
		});
	}, []);
	return <View className='flex m-2 mx-4 '>
		{user ? <>
			<Text className='text-lg'>{user.name}</Text>
			<Image className='m-2 border shadow' source={{ uri: user.imageUrlCached }} alt='user_icon' />
		</> : <Text>loading</Text>}
		<Text>url: <Link className='text-blue-700 underline' href={s?.url ?? ''}>{s?.url}</Link></Text>
		<Text>token: {s?.token}</Text>
		<Button onPress={() => router.push('user/login')}><Text>login</Text></Button>
	</View>;
}