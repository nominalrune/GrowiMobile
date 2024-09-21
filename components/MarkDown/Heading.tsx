import { Text } from 'react-native';
import { MarkedToken, Tokens } from 'marked';
import Node from './Node';

export default function Heading({ node }: { node: Tokens.Heading; }) {
	return <Text className={`${node.depth === 1 ? 'text-2xl' : node.depth === 2 ? "text-xl" : "text-lg"}`}>
		{node.tokens.map((token, i) => <Node key={i} node={token as MarkedToken} />)}
	</Text>;
}