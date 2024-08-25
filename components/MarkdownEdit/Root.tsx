import { Root as RootType } from "mdast";
import { NativeSyntheticEvent, ScrollView, Text, TextInput, TextInputChangeEventData, TextInputKeyPressEventData, View } from 'react-native';
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
	const [enterKeyPressed, setPressed] = useState(false);
	function handlePressed(event: NativeSyntheticEvent<TextInputKeyPressEventData>) {
		if (event.nativeEvent.key === 'Enter') {
			setPressed(true);
		}
	}
	function handleSelectionChange(e) {
		console.log('selection change', e.nativeEvent.selection);
		setSelection(e.nativeEvent.selection);
	}
	function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
		const target = e.currentTarget.getNativeRef();
		const text = e.nativeEvent.text;
		if (!enterKeyPressed) {
			update(text);
			return;
		}
		const prev = content.split('\n');
		const curr = text.split('\n');
		const altered = curr.map((line, i, arr) => {
			if (line !== '' && line === prev[i]) return line;
			console.log(i, "curr", line, "prev", prev[i]);
			const spaces = arr[i - 1].match(/^[ \t]*((- )|(\d+. ))?((\[ \] )|(\[x\] ))?/)?.[0] ?? '';
			prev.splice(i - 1, 0, spaces + line);
			console.log(i, "altered:", "curr", spaces + line, "prev", prev[i]);
			return spaces + line;
		});
		update(altered.join('\n'));
		setPressed(false);
	}
	const contentNode = useMemo(() => Parser.parse(content), [content]);
	useEffect(()=>{
		console.log(JSON.stringify(contentNode))
	},[contentNode])
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
			{contentNode.children?.map((node, i) => <FlowContent key={i} node={node} />)}
		</TextInput>
	</View>;
}