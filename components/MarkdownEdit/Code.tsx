import { Code as CodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
export default function Code({ node, prefix = '' }: { node: CodeType; prefix?: string; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <>
		<Text>{prefix}</Text>
		<Text className={(isLight ? 'bg-slate-100' : 'bg-slate-700') + ' rounded p-2'}>
			{node.value}
		</Text>
	</>;
}
