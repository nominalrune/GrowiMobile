import { Html as HtmlType } from "mdast";
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Html({ node }: { node: HtmlType; }) {
	return <WebView
		originWhitelist={['*']}
		source={{ html: node.value }}
	/>;
}