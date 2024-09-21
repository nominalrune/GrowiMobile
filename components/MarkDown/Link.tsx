// import { Link as LinkType } from "mdast";
import { Tokens } from 'lib/marked';
import { Pressable, Text, View } from 'react-native';
import Node from './Node';
import * as Linking from 'expo-linking';

export default function Link({ node }: { node: Tokens.Link; }) {
	return <Pressable onPress={() => { Linking.openURL(node.href); }}>
		<Text className="underline">{node.tokens.map((item, i) => <Node key={i} node={item} />)}</Text>
	</Pressable>;
}