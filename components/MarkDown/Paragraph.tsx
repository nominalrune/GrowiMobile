import { Paragraph as ParagraphType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
import Block from './Block';
export default function Paragraph({ node, className }: { node: ParagraphType; className?:string }) {
	return <Block className={className} node={node}/>;
}