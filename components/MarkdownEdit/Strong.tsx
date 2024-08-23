import { Strong as StrongType, Emphasis } from "mdast";
import { Text, View } from 'react-native';
import PhrasingContent from './PhrasingContent';
import WithText from '../../types/WithText';
import PhrasingContentType from '../../types/PhrasingContentType';
export default function Strong({ node }: { node: WithText<StrongType> | WithText<Emphasis>; }) {
	// return <Text className='font-semibold'>{node.text}</Text>
	const match = node.text.match(/((?:\*\*)|(?:__)).*?((?:\*\*)|(?:__))/);
	const prefix = match?.[1] ?? '';
	const suffix = match?.[2] ?? '';
	return <Text className='font-semibold'>
		<Text  className='text-slate-400/80 font-extrabold'>{prefix}</Text>
		{node.children.map((item, i) => <PhrasingContent key={i} node={item as PhrasingContentType} />)}
		<Text className='text-slate-400/80 font-extrabold'>{suffix}</Text>
	</Text>;
}