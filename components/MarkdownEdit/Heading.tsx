import { Heading as HeadingType } from "mdast";
import { Text, View } from 'react-native';
import PhrasingContent from './PhrasingContent';

export default function Heading({ node, prefix }: { node: HeadingType;prefix:string }) {
	return <Text className={`${node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}`}>
		{node.text}
		{/* {node.children.map((item,i) => <Text><PhrasingContent key={i} node={item} /></Text>)} */}
		{'\n'}
	</Text>;
	// return <Text className={`${node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}`}>
	// 	<Text className='text-slate-400/80 font-semibold'>{prefix}{'#'.repeat(node.depth) + ' '}</Text>
	// 	{node.children.map((item,i) => <Text><PhrasingContent key={i} node={item} /></Text>)}
	// 	{'\n'}
	// </Text>;
}