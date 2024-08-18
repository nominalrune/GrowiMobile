import { Strong as StrongType, Emphasis } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
import Block from './Block';
import Inline from './Inline';
export default function Strong({ node }: { node: StrongType | Emphasis; }) {
	return <Text className='font-bold'><Inline node={node}/></Text>;
}