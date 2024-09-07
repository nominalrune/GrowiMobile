import { Text } from 'react-native';
import Node from './Node';
import { Fragment } from 'react';
import { MarkedToken, Tokens } from 'marked';
export default function Paragraph({ node, prefix='' }: {
	node: Tokens.Paragraph;
	prefix?:string;
}) {
	return <Text>{
		node.tokens.map((child,i) => <Fragment key={i}>
			<Text>{prefix}</Text>
			<Node node={child as MarkedToken} />
		</Fragment>)
	}{`\n`}</Text>;
}