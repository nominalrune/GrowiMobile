import { Tokens } from 'lib/marked';
import { Html as HtmlType } from "mdast";
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Html({ node }: {
	node: Tokens.HTML | Tokens.Tag;
	prefix?: string;
}) {
	return <Text>
		{node.text}
		{node.block ? `\n` : ""}
	</Text>;
}