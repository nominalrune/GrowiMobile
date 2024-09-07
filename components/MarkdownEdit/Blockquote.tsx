import { Text } from 'react-native';
import Node from './Node';
import { MarkedToken, Tokens } from 'marked';
export default function Blockquote({ node }: {
	node: Tokens.Blockquote;
	prefix?: string;
}) {
	return <Text>
		<Text className='text-slate-400/80 font-extrabold'>{`> `}</Text>
		{node.tokens.map((item, i) => <Node key={i} node={item as MarkedToken} />)}
		{`\n`}
	</Text>;
}
