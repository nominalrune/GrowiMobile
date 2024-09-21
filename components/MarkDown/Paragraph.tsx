import { Text, View } from 'react-native';
import Node from './Node';
import { Fragment } from 'react';
import { MarkedToken, Tokens } from 'marked';
import Math from './Math';
export default function Paragraph({ node, }: {
	node: Tokens.Paragraph;
	prefix?: string;
}) {
	return <View className='flex-row flex-wrap justify-start items-center'>{
		node.tokens.map((child, i) => <Fragment key={i}>
			<View>
				<Node node={child as MarkedToken} />
			</View>
		</Fragment>)
	}</View>;
}