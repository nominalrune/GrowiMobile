import { ReactNode } from 'react';
import { GestureResponderEvent, Pressable, View, Text } from 'react-native';

interface Prop {
	children: ReactNode,
	onPress?: ((event: GestureResponderEvent) => void);
}
export default function IconButton({ children, onPress }: Prop) {
	return <Pressable onPress={onPress} className={'justify-center items-center rounded bg-slate-200 active:bg-slate-50'}>
		<View className='m-2'>{children}</View>
	</Pressable>;
}