import { Root as RootType } from "mdast";
import { ScrollView, Text, TextInput, View } from 'react-native';
import Block from './Block';
import { useMemo, useState } from 'react';
import Parser from '../../services/Markdown/Parser';
export default function Root({ content:content, update }: { content: string; update:(context:string)=>void}) {
	
	const contentNode= useMemo(()=>Parser.parse(content),[content]);
	return <ScrollView horizontal={true} className='m-4'>
		<TextInput 
		multiline
		style={{fontFamily:'monospace'}}
		onChangeText={update}
		>
			<Block node={contentNode} />
			</TextInput>
	</ScrollView>;
}