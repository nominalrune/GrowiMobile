// import { Root as RootType } from "mdast";
import { NativeSyntheticEvent, ScrollView, Text, TextInput, TextInputChangeEventData, TextInputKeyPressEventData, TextInputSelectionChangeEventData, View } from 'react-native';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import Parser from '../../services/Markdown/Parser';
import FlowContent from './FlowContent';
interface Prop{ 
	content: string; 
	update: (context: string) => void;
	setSelection:(selection:{start:number, end:number})=>void;
}
export default function Root({ content, update, setSelection }:Prop ) {
	const inputRef = useRef<TextInput>(null);
	const contentNode = useMemo(() => Parser.parse(content), [content]);
	useEffect(()=>{
		console.log(JSON.stringify(contentNode))
	},[contentNode]);
	const [enterKeyPressed, setPressed] = useState(false);
	function handlePressed(event: NativeSyntheticEvent<TextInputKeyPressEventData>) {
		if (event.nativeEvent.key === 'Enter') {
			setPressed(true);
		}
	}
	function handleSelectionChange(e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) {
		console.log('selection change', e.nativeEvent.selection);
		setSelection(e.nativeEvent.selection);
	}
	function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
		const text = e.nativeEvent.text;
		if (!enterKeyPressed) {
			update(text);
			return;
		}
	}
	return <View className=''>
		<TextInput
			ref={inputRef}
			multiline
			className='p-2'
			style={{ fontFamily: 'monospace' }}
			onChange={handleChange}
			onSelectionChange={handleSelectionChange}
			onKeyPress={handlePressed}
		>
			{contentNode?.map((node, i) => <FlowContent key={i} node={node} />)}
		</TextInput>
	</View>;
}