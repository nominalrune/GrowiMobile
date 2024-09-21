import { Text, useColorScheme, View } from 'react-native';
import { Tokens } from 'marked';
export default function Code({ node }: { node: Tokens.Code; }) {
	const colorScheme = useColorScheme();
	const isLight = colorScheme === 'light';
	return <View className={
		(isLight ? 'bg-slate-200' : 'bg-slate-700')
		+ ' rounded border border-slate-400 p-2'
	}>
		<Text className='absolute right-0 rounded bg-slate-400/50'>{node.lang}</Text>
		<Text style={{fontFamily:"monospace"}}>{node.text}</Text>
	</View>;
}
