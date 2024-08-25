import { Tokens } from 'marked';
import { Html as HtmlType } from "mdast";
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Html({ node }: { node: Tokens.HTML|Tokens.Tag;
	prefix?: string; }) {
	return <Text>{node.raw}\n</Text>;
}