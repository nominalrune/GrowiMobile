import { View, Text } from 'react-native';
import {
	PhrasingContent as PhrasingContentType,
} from 'mdast';
import Node from './FlowContent';
import { Fragment } from 'react';
import Strong from './Strong';
import Html from './Html';
import Image from './Image';
import Link from './Link';
import InlineCode from './InlineCode';

interface Prop{
	node: PhrasingContentType; 
}
export default function PhrasingContent({node}:Prop){
	console.log(node)
	// return <Text>{node.text}</Text>;
	switch (node.type){
		case 'break':
			return <Text>---{`\n`}</Text>;
		case 'delete':
			return <Text>~~{node.children.map(item=><PhrasingContent node={item}/>)}~~</Text>;
		case 'emphasis':
		case 'strong':
			return <Text><Strong node={node} /></Text>;
		case 'html':
			return <><Text></Text><Html node={node} /></>;
		case 'image':
			return <Image node={node} />;
		case 'link':
			return <Link node={node} />;
		case 'inlineCode':
			return <InlineCode node={node} />;
		case 'text':
			return <Text>{node.value}</Text>;
		default:
			return <Text>(reference)</Text>
	}
	return <></>
}