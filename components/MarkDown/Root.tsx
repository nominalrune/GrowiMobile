// import { Root as RootType } from "mdast";
import { NativeSyntheticEvent, ScrollView, Text, TextInput, TextInputChangeEventData, TextInputKeyPressEventData, TextInputSelectionChangeEventData, View } from 'react-native';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import Parser from '../../services/Markdown/Parser';
import FlowContent from './FlowContent';
interface Prop {
	content: string;
}
export default function Root({ content }: Prop) {
	const contentNode = useMemo(() => Parser.parse(content), [content]);
	return <View className='m-1'>
		{contentNode?.map((node, i) => <FlowContent key={i} node={node} />)}
	</View>;
}