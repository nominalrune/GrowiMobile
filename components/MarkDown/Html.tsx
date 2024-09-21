import { Tokens } from 'lib/marked';
import { WebView } from 'react-native-webview';
export default function Html({ node }: {
	node: Tokens.HTML | Tokens.Tag;
	prefix?: string;
}) {
	console.log(node.text);
	return <WebView
		originWhitelist={['*']}
		scrollEnabled={true}
		source={{ html: node.text }}
	/>;
}