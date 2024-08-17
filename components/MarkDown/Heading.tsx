import { Heading as HeadingType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
export default function Heading({ node }: { node: HeadingType; }) {
	return <Text>{node.children.map(item=><Node node={item}/>)}</Text>;
}