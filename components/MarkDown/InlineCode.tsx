import { InlineCode as InlineCodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
export default function InlineCode({ node }: { node: InlineCodeType; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <Text className={isLight ? 'text-slate-900 bg-slate-100' : 'text-slate-50 bg-slate-700' + ' rounded p-1'}>
		{node.value}
	</Text>
		;
}