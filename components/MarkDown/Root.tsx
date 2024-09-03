import { Root as RootType } from "mdast";
import { ScrollView, Text, TextInput, View } from 'react-native';
import Block from './Block';
import {marked} from 'lib/marked'
import WebView from 'react-native-webview';
export default function Root({ content}: { content: string; }) {
	return <ScrollView horizontal={true} className='m-4'>
		<WebView source={{html:marked(content, {async:false})}}/>
	</ScrollView>;
}