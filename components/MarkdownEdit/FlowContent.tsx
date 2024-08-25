
import List from './List';
import Blockquote from './Blockquote';
import Code from './Code';
import Strong from './Strong';
import Heading from './Heading';
import Html from './Html';
import Image from './Image';
import Link from './Link';
import InlineCode from './InlineCode';
import Paragraph from './Paragraph';
import Table from './Table';
import { Text, View } from 'react-native';
import WithText from '../../types/WithText';
import FlowContentType from '../../types/FlowContentType';
import { Token } from 'marked';

interface Prop {
	// node: FlowContentType;
	node:Token
	prefix?:string
}
export default function FlowContent({ node, prefix }: Prop) {
	switch (node.type) {
		case 'blockquote':
			return <Blockquote node={node} />;
		case 'code':
			return <><Code node={node} /></>;
		case 'heading':
			return <Heading node={node} />;
		case 'html':
			return <Html node={node} />;
		case 'list':
			return <><List node={node} prefix={prefix} /></>;
		case 'paragraph':
			return <Paragraph node={node} prefix={prefix} />;
		case 'table':
			return <Table node={node} />;
		default:
			return <Text>{node.raw}</Text>;
	}
}