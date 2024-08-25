import { Stack, Slot, } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import useAuthStore from '../../hooks/useAuthStore';
import useApi from '../../hooks/useApi';
import { StatusBar } from 'expo-status-bar';
export default function Layout() {
	const [a, setA] = useState<any>();
	const { get } = useAuthStore();
	const { api } = useApi();
	useEffect(() => {
		const r = get();
		setA(r);
	}, []);
	// return <>
	// 	<Slot />
	// 	<Text>url:{a?.url}</Text>
	// 	<Text>token:{a?.token}</Text>
	// 	<Text>api:{typeof api}</Text>
	// </>;
	return <Stack>
		<Stack.Screen
			name='index'
			options={{
				title: "User",
				headerShown: true,
			}}
		/>
		<Stack.Screen
			name='login'
		// options={{
		// 	title: "page"
		// }}
		/>
	</Stack>;
}