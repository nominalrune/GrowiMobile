import { Paragraph as ParagraphType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
import Block from './Block';
import Inline from './Inline';
export default function Paragraph({ node, className }: { node: ParagraphType; className?:string }) {
	return <Inline className={className} node={node}/>;
}