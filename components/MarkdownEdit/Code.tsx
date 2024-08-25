import { Code as CodeType } from "mdast";
import { Text, useColorScheme, View } from 'react-native';
import WithText from '../../types/WithText';
import { Tokens } from 'marked';
export default function Code({ node}: { node: Tokens.Code; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <Text className={(isLight ? 'bg-slate-100' : 'bg-slate-700') + ' rounded p-2'}>
			{node.raw}
		</Text>;
}
