import { Text } from 'react-native';
import Node from './Node';
import { Tokens } from 'lib/marked';
import { MarkedToken } from 'marked';
export default function Strong({ node }: { node: Tokens.Em | Tokens.Strong; }) {
	const match = node.raw.match(/^((?:\*\*)|(?:__)).*?((?:\*\*)|(?:__))$/);
	const prefix = match?.[1] ?? '';
	const suffix = match?.[2] ?? '';
	return <Text className='font-semibold'>
		<Text className='text-slate-400/80 font-extrabold'>{prefix}</Text>
		{node.tokens.map((item, i) => <Node key={i} node={item as MarkedToken} />)}
		<Text className='text-slate-400/80 font-extrabold'>{suffix}</Text>
	</Text>;
}