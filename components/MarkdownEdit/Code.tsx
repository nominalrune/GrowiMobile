import { Text, useColorScheme } from 'react-native';
import { Tokens } from 'marked';
export default function Code({ node }: { node: Tokens.Code; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <Text className={
			(isLight ? 'bg-slate-200' : 'bg-slate-700')
			+ ''
		}>
			<Text className='text-slate-400/80 font-extrabold'>```</Text>
			<Text>{node.lang}{`\n`}</Text>
			<Text>{node.text}{`\n`}</Text>
			<Text className='text-slate-400/80 font-extrabold'>```{`\n`}</Text>
		</Text>;
}
