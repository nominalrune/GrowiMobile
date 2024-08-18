import { Heading as HeadingType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';

export default function Heading({ node, className }: { node: HeadingType; className?:string }) {
	return <View><Text className={node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}>
		{node.children.map((item,i) => <Node key={i} node={item} className={className} />)}
	</Text></View>;
}