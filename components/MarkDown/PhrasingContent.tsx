import { View, Text } from 'react-native';

import Node from './Node';
import { Fragment } from 'react';
import Strong from './Strong';
import Html from './Html';
import Image from './Image';
import Link from './Link';
import InlineCode from './InlineCode';
import WithText from '../../types/WithText';
import PhrasingContentType from '../../types/PhrasingContentType';
import { MarkedToken, Token } from 'lib/marked';

interface Prop {
	node: MarkedToken;
}
export default function PhrasingContent({ node }: Prop) {
	// return <Text>{node.text}</Text>;
	switch (node.type) {
		// case 'break':
		// 	return <Text area-type={node.type}>{node.text}</Text>;
		// case 'delete': // TODO
		// 	return <Text>~~{node.tokens.map(item => <PhrasingContent node={item as PhrasingContentType} />)}~~</Text>;
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
		case 'em':
		case 'strong':
			return <Text><Strong node={node} /></Text>;
		case 'html':
			return <><Text></Text><Html node={node} /></>;
		case 'image':
			return <Image node={node} />;
		case 'link':
			return <Link node={node} />;
		case 'text':
			return <Text>{node.text}</Text>;
		default:
			return <Text>{node.raw}</Text>;
	}
	return <></>;
}