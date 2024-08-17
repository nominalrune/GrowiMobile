import { Html as HtmlType } from "mdast";
import { Text, View } from 'react-native';
export default function Html({ node }: { node: HtmlType; }) {
	return <Text>{node.value}</Text>;
}