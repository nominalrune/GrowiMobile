import { Code as CodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
import WithText from '../../types/WithText';
import { Tokens } from 'marked';
export default function CodeSpan({ node }: { node: Tokens.Codespan; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <View className={
		(isLight ? 'bg-slate-300' : 'bg-slate-700')
		+ ' rounded px-1 '
	}><Text style={{fontFamily:"monospace"}}>
			{node.text}
		</Text>
	</View>
		;
}
