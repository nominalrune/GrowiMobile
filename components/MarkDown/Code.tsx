import { Code as CodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
export default function Code({ node }: { node: CodeType; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <View className={(isLight ? 'bg-slate-100' : 'bg-slate-700') + ' rounded p-2'}>
		<Text className={isLight?'text-slate-900':'text-slate-50'}>{node.value}</Text>
	</View>;
}