import { Root as RootType } from "mdast";
import { ScrollView, Text, TextInput, View } from 'react-native';
import Block from './Block';
export default function Root({ node }: { node: RootType; }) {
	return <ScrollView horizontal={true} className='m-4'>
		<Block node={node} />
	</ScrollView>;
}