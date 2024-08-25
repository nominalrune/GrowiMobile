import { Paragraph as ParagraphType } from "mdast";
import { Text, View } from 'react-native';
import PhrasingContent from './PhrasingContent';
import { Fragment } from 'react';
import WithText from '../../types/WithText';
export default function Paragraph({ node, prefix='' }: {
	node: WithText<ParagraphType>;
	prefix?:string;
}) {
	return <Text>{
		node.children.map((child,i) => <Fragment key={i}>
			<Text>{prefix}</Text>
			<PhrasingContent node={child} />
		</Fragment>)
	}{`\n`}</Text>;
}