import { ListItem as ListItemType, List as ListType, Paragraph as ParagraphType } from "mdast";
import FlowContent from './FlowContent';
import { FlatList, Text, View } from 'react-native';
import Paragraph from './Paragraph';
import { useState } from 'react';
import WithText from '../../types/WithText';
export default function List({ node, }: { node: WithText<ListType>; }) {
	// return <Text>{node.text}</Text>
	return <Text className="flex flex-col justify-start">
		{
			node.children.map((item, i) => <ListItem key={i} node={item} />)
		}
	</Text>;
}

function ListItem({ node }: { node: WithText<ListItemType>; }) {
	const match = node.text.match(/(^[ \t]*)((?:[\-\*]|(?:\d+.)) )(\[[x ]\] )?(.*)$/s);
	const prefix = match?.[1] ?? '';
	const mark = match?.[2] ?? '';
	const checkmark = match?.[3] ?? '';
	const rest = match?.[4] ?? "";
	const children = [...node.children];
	const paragraph = children.shift();
	const itemText = paragraph ? <FlowContent node={paragraph} /> : <Text>{`\n`}</Text>
	// return <Text>{node.text}{`\n`}</Text>
	return <>
		<Text className='text-slate-400/80 font-extrabold'>
			{prefix}
			{mark}
			{node.checked !== null && (checkmark === '[x] '
				? <>[<Text className='text-green-600'>x</Text>] </>
				: <>{checkmark}</>
			)}
		</Text>
		{/* {itemText} */}
		<Text>{rest}{`\n`}</Text>
		{/* <Text className='text-black'>
			{paragraph ? <FlowContent node={paragraph} /> : <Text>{`\n`}</Text>}
		</Text> */}
		{/* {
			!!children.length
				? children.map((item, i) => <FlowContent key={i} node={item} />)
				: <></>
		} */}
	</>;
}