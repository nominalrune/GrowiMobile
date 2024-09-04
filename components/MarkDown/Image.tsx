import { Tokens } from 'marked';
import { Image as ImageType } from "mdast";
import { Text, View, Image } from 'react-native';
export default function({ node }: { node: Tokens.Image; }) {
	return <View>
		<Text className='underline'>{node.href}</Text>
		<Image width={20} height={30} style={{backgroundColor:"blue"}} src={node.href} source={{uri:node.href}} alt={node.text}/>
		<Image style={{backgroundColor:"blue"}} src={'https://fastly.picsum.photos/id/1068/200/300.jpg?hmac=ICIwYXRGTpDxBPZAI7V8YxGtBBanV8Dfbe_DLNKtYcE'} source={{uri:node.href}} alt={node.text}/>
		<Text className='underline'>{node.href}</Text>
	</View>;
}