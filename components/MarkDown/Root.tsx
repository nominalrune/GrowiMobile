import { View } from 'react-native';
import { useEffect, useMemo } from 'react';
import Parser from '../../services/Markdown/Parser';
import Node from './Node';
import WebView from 'react-native-webview';
interface Prop {
	content: string;
}
export default function Root({ content }: Prop) {
	const contentNode = useMemo(() => Parser.parse(content), [content]);
	useEffect(() => { console.log(JSON.stringify(contentNode)); }, [contentNode]);
	return <View className='m-1 px-2'>
		{contentNode?.map((node, i) => <Node key={i} node={node} />)}
		{/* <WebView
			style={{ width: "100%", height: 1000, backgroundColor: "transparent", }}
			originWhitelist={['*']}
			scrollEnabled={true}
			source={{
				html: Parser.render(content) as string
			}} /> */}
	</View>;
}