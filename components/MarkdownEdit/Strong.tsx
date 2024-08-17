import { Strong as StrongType, Emphasis } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
import Block from './Block';
export default function Strong({ node }: { node: StrongType | Emphasis; }) {
	return <Text className='font-semibold'><Block node={node}/></Text>;
}