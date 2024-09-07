import { Text } from 'react-native';
import Node from './Node';
import { MarkedToken, Tokens } from 'marked';

export default function Heading({ node }: { node: Tokens.Heading; }) {
	const match = node.raw.match(/^([ \t]*#+ )?(.*?)$/);
	const mark = match?.[1] ?? '';
	return <Text className={`${node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}`}>
		<Text className='text-slate-400/80 font-extrabold'>{mark}</Text>
		{node.tokens.map((item, i) => <Node key={i} node={item as MarkedToken} />)}
		{'\n'}
	</Text>;
}