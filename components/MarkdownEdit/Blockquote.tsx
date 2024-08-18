import { Blockquote as BlockquoteType } from "mdast";
import { Text, View } from 'react-native';
import FlowContent from './FlowContent';
export default function Blockquote({ node }: { node: BlockquoteType; 
	prefix?: string;}) {
	return <Text>
			{node.children.map((item, i) => <FlowContent key={i} node={item} />)}
		{'\n'}
	</Text>;
}
