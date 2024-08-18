import { ListItem as ListItemType, List as ListType, Paragraph as ParagraphType } from "mdast";
import FlowContent from './FlowContent';
import { FlatList, Text, View } from 'react-native';
import Paragraph from './Paragraph';
import { useState } from 'react';
export default function List({ node, prefix = '' }: { node: ListType; prefix?: string; }) {
	return <Text className="flex flex-col justify-start">
		{
			node.children.map((item, i) => <ListItem prefix={prefix} key={i} mark={node.ordered ? `${i + 1}. ` : '- '} node={item} />)
		}
	</Text>;
}

function ListItem({ mark, node, prefix }: { mark: string, node: ListItemType; prefix: string; }) {
	const children = [...node.children];
	const paragraph = children.shift();
	return <>
		<Text className='text-slate-400/80 font-extrabold'>{prefix + mark}</Text>
		{
			typeof node.checked === 'boolean'
				? (!!node.checked
					? <Text className=''>[<Text className='text-green-600'>x</Text>] </Text>
					: <Text className=''>[ ] </Text>
				)
				: <></>
		}
		<Text className='text-black'>
			{paragraph ? <FlowContent node={paragraph} /> : <Text>{`\n`}</Text>}
		</Text>
		{
			!!children.length
				? children.map((item, i) => <FlowContent key={i} node={item} prefix={prefix + '  '} />)
				: <></>
		}
	</>;
}