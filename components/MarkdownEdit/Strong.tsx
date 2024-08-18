import { Strong as StrongType, Emphasis } from "mdast";
import { Text, View } from 'react-native';
import PhrasingContent from './PhrasingContent';
export default function Strong({ node }: { node: StrongType | Emphasis; }) {
	return <Text className='font-semibold'>{node.text}</Text>
	// return <Text className='font-semibold'>**{node.children.map((item,i)=><PhrasingContent key={i} node={item} />)}**</Text>;
}