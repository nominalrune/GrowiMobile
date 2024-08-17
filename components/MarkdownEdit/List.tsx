import { ListItem as ListItemType, List as ListType, Paragraph as ParagraphType } from "mdast";
import Node from './Node';
import { FlatList, Text, View } from 'react-native';
import Paragraph from './Paragraph';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
export default function List({ node, prefix = '' }: { node: ListType; prefix?: string; }) {
	return <Text className="flex flex-col justify-start">{
		node.children.map((item, i) => <ListItem prefix={prefix} key={i} mark={node.ordered ? `${i + 1}. ` : '- '} node={item} />)
	}</Text>;
}

function ListItem({ mark, node, prefix }: { mark: string, node: ListItemType; prefix: string; }) {
	const [isChecked, setChecked] = useState(!!node.checked);
	const children = [...node.children];
	const paragraph = children.shift();
	return <>
		<>
			<Text className='text-slate-400/80'>{prefix + mark}</Text>
			{typeof node.checked === 'boolean' ? isChecked ? <Text className='text-slate-400/80 font-extrabold'>[<Text className='text-green-600'>x</Text>] </Text> : <Text className='text-slate-400/80 font-extrabold'>[ ] </Text> : ""}
			{paragraph?.type === "paragraph" && <Paragraph node={paragraph as ParagraphType} />}
		</>
		<>{
			children.map((item, i) => <Node key={i} node={item} prefix={prefix + '  '} />)
		}</></>;
}