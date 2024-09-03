import { Code as CodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
import WithText from '../../types/WithText';
import { Tokens } from 'marked';
export default function CodeSpan({ node }: { node: Tokens.Codespan; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <Text className={
			(isLight ? 'bg-slate-200' : 'bg-slate-700')
			+ ''
		}>
			<Text className='text-slate-400/80 font-extrabold'>`</Text>
			{node.text}
			<Text className='text-slate-400/80 font-extrabold'>`</Text>
		</Text>
		;
}
