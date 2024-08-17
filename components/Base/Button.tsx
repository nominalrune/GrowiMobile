import { ReactNode } from 'react';
import { GestureResponderEvent, Pressable, View, Text } from 'react-native';

interface Prop {
	children: ReactNode,
	onPress?: ((event: GestureResponderEvent) => void);
}
export default function Button({ children, onPress }: Prop) {
	return <Pressable onPress={onPress} className='justify-center items-center bg-blue-400 active:bg-blue-300 rounded px-4 py-1 m-6'>
			{children}
		</Pressable>;
}