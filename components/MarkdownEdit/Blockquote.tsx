import { Blockquote as BlockquoteType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
export default function Blockquote({ node }: { node: BlockquoteType; }) {
	return <Text>
			{node.children.map((item, i) => <Node key={i} node={item} className='text-slate-500/80' />)}
		{'\n'}
	</Text>;
}
