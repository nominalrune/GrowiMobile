import { ReactNode } from 'react';
import { GestureResponderEvent, Pressable, View, Text } from 'react-native';

interface Prop {
	children: ReactNode,
	onPress?: ((event: GestureResponderEvent) => void);
}
export default function IconButton({ children, onPress }: Prop) {
	return <Pressable onPress={onPress} className={'h-12 w-12 justify-center items-center rounded bg-slate-200 active:bg-slate-50'}>
		{children}
	</Pressable>;
}