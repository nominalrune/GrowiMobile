import { Tokens } from 'marked';
import { Image as ImageType } from "mdast";
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
export default function ({ node }: { node: Tokens.Image; }) {
	return <View style={{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}}><Image style={{
		
		width: 100,
		height:100,
	}} contentFit="none" source={'https://fastly.picsum.photos/id/1068/200/300.jpg?hmac=ICIwYXRGTpDxBPZAI7V8YxGtBBanV8Dfbe_DLNKtYcE'} alt={node.text} />
	</View>;
}