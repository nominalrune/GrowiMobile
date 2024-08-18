import { Root as RootType } from "mdast";
import { NativeSyntheticEvent, ScrollView, Text, TextInput, TextInputKeyPressEventData, View } from 'react-native';
import { useMemo, useState } from 'react';
import Parser from '../../services/Markdown/Parser';
import FlowContent from './FlowContent';
export default function Root({ content, update }: { content: string; update: (context: string) => void; }) {
	const [enterKeyPressed, setPressed] = useState(false);
	function handlePressed(event: NativeSyntheticEvent<TextInputKeyPressEventData>) {
		if (event.nativeEvent.key === 'Enter') {
			setPressed(true);
		}
	}
	function handleChange(text: string) {
		if (!enterKeyPressed) {
			update(text);
			return;
		}
		const prev = content.split('\n');
		const curr = text.split('\n');
		const altered = curr.map((line, i, arr) => {
			if (line === prev[i]) return line;
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
	return <View className=''>
		<TextInput
			multiline
			className='p-2'
			style={{ fontFamily: 'monospace' }}
			onChangeText={handleChange}
			onKeyPress={handlePressed}
		>
			{contentNode.children?.map((node,i)=><FlowContent key={i} node={node} />)}
		</TextInput>
	</View>;
}