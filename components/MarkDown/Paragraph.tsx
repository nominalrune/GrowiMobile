import { Paragraph as ParagraphType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
export default function Paragraph({ node }: { node: ParagraphType; }) {
	return <View>{
		node.children.map((item, i) => <Node key={i} node={item} />)
	}</View>;
}