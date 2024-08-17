import { Blockquote as BlockquoteType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
export default function Blockquote({ node }: { node: BlockquoteType; }) {
	return <View className='border-l-2 border-slate-500 pl-2'>
		<Text className='text-slate-500'>
			{node.children.map((item, i) => <Node key={i} node={item} />)}
		</Text>
	</View>;
}