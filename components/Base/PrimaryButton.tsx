import { ReactNode } from 'react';
import { GestureResponderEvent, Pressable, View, Text } from 'react-native';
import Button from './Button';

interface Prop {
	children: ReactNode,
	onPress?: ((event: GestureResponderEvent) => void);
}
export default function PrimaryButton({ children, onPress }: Prop) {
		return <Pressable onPress={onPress} className='justify-center items-center px-4 py-1 bg-blue-400 active:bg-blue-300 rounded'>
		<Text className='text-white'>{children}</Text>
	</Pressable>;
}