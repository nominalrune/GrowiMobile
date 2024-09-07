
import List from './List';
import Blockquote from './Blockquote';
import Code from './Code';
import Strong from './Strong';
import Heading from './Heading';
import Html from './Html';
import Image from './Image';
import Link from './Link';
import Paragraph from './Paragraph';
import Table from './Table';
import { Text } from 'react-native';
import { MarkedToken } from 'lib/marked';
import CodeSpan from './CodeSpan';

interface Prop {
	node: MarkedToken;
	prefix?: string;
}
export default function Node({ node, prefix }: Prop) {
	switch (node.type) {
		case 'blockquote':
			return <Blockquote node={node} />;
		case 'code':
			return <Code node={node} />;
		case 'codespan':
			return <CodeSpan node={node} />;
		case 'heading':
			return <Heading node={node} />;
		case 'html':
			return <Html node={node} />;
		case 'list':
			return <List node={node} prefix={prefix} />;
		case 'paragraph':
			return <Paragraph node={node} prefix={prefix} />;
		case 'table':
			return <Table node={node} />;
		case 'em':
		case 'strong':
			return <Strong node={node} />;
		case 'html':
			return <><Html node={node} /></>;
		case 'image':
			return <Image node={node} />;
		case 'link':
			return <Link node={node} />;
		case 'text':
			return <Text>{
				'tokens' in node
					? node.tokens?.map((token, i) => <Node key={i} node={token as MarkedToken} />)
					: node.raw
			}</Text>;
		case 'space':
			return <Text>{`${node.raw.replace(/\n\n/, `\n`)}`}</Text>;
		default:
			return <Text>{node.raw}</Text>;
	}
}