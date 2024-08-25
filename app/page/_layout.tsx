import { Stack } from 'expo-router';
export default function () {
	return <Stack>
		<Stack.Screen
			name='index'
			// options={{
			// 	title: "page"
			// }}
		/>
		<Stack.Screen
			name='[...rest]'
			// options={{
			// 	title: "page"
			// }}
		/>
	</Stack>;
};