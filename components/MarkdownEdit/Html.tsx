import { Html as HtmlType } from "mdast";
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Html({ node }: { node: HtmlType;
	prefix?: string; }) {
	return <Text>{node.value}\n</Text>;
}