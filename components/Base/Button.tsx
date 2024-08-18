import { ReactNode } from 'react';
import { GestureResponderEvent, Pressable, View, Text } from 'react-native';

interface Prop {
	children: ReactNode,
	onPress?: ((event: GestureResponderEvent) => void);
}
export default function Button({ children, onPress }: Prop) {
	return <Pressable onPress={onPress} className='justify-center items-center px-4 py-1 rounded bg-slate-400 active:bg-slate-300'>
			<Text className='text-white'>{children}</Text>
		</Pressable>;
}