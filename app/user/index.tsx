import { Link, router } from 'expo-router';
import Button from '../../components/Base/Button';
import { Text, View, Image } from 'react-native';
import useAuth from '../../contexts/Auth/useAuth';
import { useEffect, useState } from 'react';

export default function User() {
	const { user, url, token } = useAuth();
	return <View className='flex m-2 mx-4 '>
		{user ? <>
			<Text className='text-lg'>{user.name}</Text>
			<Text>user image</Text><Image className='w-24 h-24 border shadow bg-white' source={{ uri: user.imageUrlCached }} alt='user_icon' />
			<Text>fixed image</Text><Image className='w-24 h-24 bg-gray-400' src='data:image/png;UTF-8,https://wiki.paulsenglish.jp/attachment/66bd7c4a5a9c2c8eef0f0ffc' />
		</> : <Text>loading</Text>}
		<Text>url: <Link className='text-blue-700 underline' href={url ?? ''}>{url}</Link></Text>
		<Text>token: {token}</Text>
		<Button onPress={() => router.push('user/login')}><Text>login</Text></Button>
	</View>;
}