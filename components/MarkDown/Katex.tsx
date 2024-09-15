import { Tokens } from 'marked';
import { Text, useColorScheme } from 'react-native';
import WebView from 'react-native-webview';
import katex from 'katex';
export default function Katex({ node }: { node: Tokens.Paragraph; }) {
	const match = node.text.match(/$$(.*?)$$/);
	const text = match ? match[1] : "";
	const html = katex.renderToString(text);
	return <WebView source={{html}} />;
}