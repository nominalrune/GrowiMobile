import { InlineCode as InlineCodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
export default function InlineCode({ node }: { node: InlineCodeType; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <Text className={isLight ? 'text-slate-900 bg-slate-100' : 'text-slate-50 bg-slate-700' + ' rounded p-1'}>
		<Text className='text-slate-400/80'>`</Text>
		{node.value}
		<Text className='text-slate-400/80'>`</Text>
	</Text>;
}