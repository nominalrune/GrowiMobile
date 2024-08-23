import { Heading as HeadingType } from "mdast";
import { Text, View } from 'react-native';
import PhrasingContent from './PhrasingContent';
import WithText from '../../types/WithText';
import PhrasingContentType from '../../types/PhrasingContentType';

export default function Heading({ node }: { node: WithText<HeadingType>; }) {
	const match = node.text.match(/^[ \t]*#+ /);
	const mark = match?.[0] ?? '';
	return <Text className={`${node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}`}>
		<Text className='text-slate-400/80 font-extrabold'>{mark}</Text>
		{node.text}
		{/* {node.children.map((item, i) => <PhrasingContent key={i} node={item as PhrasingContentType} />)} */}
		{'\n'}
	</Text>;
	// return <Text className={`${node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}`}>
	// 	<Text className='text-slate-400/80 font-semibold'>{prefix}{'#'.repeat(node.depth) + ' '}</Text>
	// 	{node.children.map((item,i) => <Text><PhrasingContent key={i} node={item} /></Text>)}
	// 	{'\n'}
	// </Text>;
}