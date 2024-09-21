import { Text, View } from 'react-native';
import Node from './Node';
import { MarkedToken, Token, Tokens } from 'marked';
export default function Blockquote({ node }: {
	 node: Tokens.Blockquote; 
	prefix?: string;}) {
	return <View className='border-l-2 pl-2'>
			{node.tokens.map((item, i) => <Node key={i} node={item as MarkedToken} />)}
	</View>;
}
