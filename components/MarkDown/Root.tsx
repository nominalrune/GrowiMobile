import { Root as RootType } from "mdast";
import { Text, View } from 'react-native';
import Node from './Node';
export default function Root({ node }: { node: RootType; }) {
	return <View> {
		node.children.map((item, i) => <Node key={i} node={item} />)
	} </View>;
}