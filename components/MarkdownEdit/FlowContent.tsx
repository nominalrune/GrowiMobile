
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
import { MarkedToken, Token } from 'lib/marked';
import CodeSpan from './CodeSpan';

interface Prop {
	// node: FlowContentType;
	node: MarkedToken;
	prefix?: string;
}
export default function FlowContent({ node, prefix }: Prop) {
	switch (node.type) {
		case 'blockquote':
			return <Blockquote node={node} />;
		case 'code':
			return <><Code node={node} /></>;
		case 'codespan':
			return <><CodeSpan node={node} /></>;
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
		case 'em':
		case 'strong':
			return <Text><Strong node={node} /></Text>;
		case 'html':
			return <><Text></Text><Html node={node} /></>;
		case 'image':
			return <Image node={node} />;
		case 'link':
			return <Link node={node} />;
		// case 'inlineCode':
		// 	return <InlineCode node={node} />;
		case 'text':
			return <Text>{'tokens' in node 
				? node.tokens?.map((token, i) => <FlowContent key={i} node={token} />) 
				: <Html node={node} />
				}</Text>;
			case 'space':
				return <Text>{`${node.raw.replace(/\n\n/, `\n`)}`}</Text>
		default:
			return <Text>{node.raw}</Text>;
	}
}