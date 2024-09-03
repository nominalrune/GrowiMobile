import { Tokens } from 'marked';
import { Image as ImageType } from "mdast";
import { Text, View, Image } from 'react-native';
export default function({ node }: { node: Tokens.Image; }) {
	return <>
		<Text className='text-slate-400/80 font-extrabold'>![</Text>
		<Text>{node.text}</Text>
		<Text className='text-slate-400/80 font-extrabold'>](</Text>
		<Text className='underline'>{node.href}</Text>
		<Text className='text-slate-400/80 font-extrabold'>)</Text>
	</>;
}