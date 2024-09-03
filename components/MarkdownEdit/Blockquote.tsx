// import { Blockquote as BlockquoteType } from "mdast";
import { Text, View } from 'react-native';
import FlowContent from './FlowContent';
import WithText from '../../types/WithText';
import { Token, Tokens } from 'marked';
export default function Blockquote({ node }: {
	 node: Tokens.Blockquote; 
	prefix?: string;}) {
	return <Text>
		<Text className='text-slate-400/80 font-extrabold'>{`> `}</Text> 
			{node.tokens.map((item, i) => <FlowContent key={i} node={item as Token} />)}
		{`\n`}
	</Text>;
}
