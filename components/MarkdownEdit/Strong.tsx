import { Strong as StrongType, Emphasis } from "mdast";
import { Text, View } from 'react-native';
import PhrasingContent from './PhrasingContent';
import WithText from '../../types/WithText';
import PhrasingContentType from '../../types/PhrasingContentType';
import { Tokens } from 'lib/marked';
export default function Strong({ node }: { node: Tokens.Em | Tokens.Strong; }) {
	// return <Text className='font-semibold'>{node.text}</Text>
	const match = node.raw.match(/^((?:\*\*)|(?:__)).*?((?:\*\*)|(?:__))$/);
	const prefix = match?.[1] ?? '';
	const suffix = match?.[2] ?? '';
	return <Text className='font-semibold'>
		<Text className='text-slate-400/80 font-extrabold'>{prefix}</Text>
		{node.tokens.map((item, i) => <PhrasingContent key={i} node={item} />)}
		<Text className='text-slate-400/80 font-extrabold'>{suffix}</Text>
	</Text>;
}