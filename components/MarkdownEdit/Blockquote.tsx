import { Blockquote as BlockquoteType } from "mdast";
import { Text, View } from 'react-native';
import FlowContent from './FlowContent';
import WithText from '../../types/WithText';
export default function Blockquote({ node }: { node: WithText<BlockquoteType>; 
	prefix?: string;}) {
	return <Text>
			{node.children.map((item, i) => <FlowContent key={i} node={item} />)}
		{'\n'}
	</Text>;
}
