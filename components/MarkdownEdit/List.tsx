import { ListItem as ListItemType, List as ListType, Paragraph as ParagraphType } from "mdast";
import FlowContent from './FlowContent';
import { FlatList, Text, View } from 'react-native';
import Paragraph from './Paragraph';
import { useState } from 'react';
import WithText from '../../types/WithText';
import { Tokens } from 'marked';
export default function List({ node, prefix }: { node: Tokens.List; prefix?: string; }) {
	// return <Text>{node.text}</Text>
	return <Text className="flex flex-col justify-start">
		{
			node.items.map((item, i) => <ListItem key={i} node={item} prefix={prefix} />)
		}
	</Text>;
}

function ListItem({ node, prefix: _prefix = '' }: { node: Tokens.ListItem; prefix?: string; }) {
	const matchReg = /^([ \t]*)((?:[\-\*]|(?:\d+.)) )?(\[[x ]\] )?(.*)(?:¥n(.*?))?$/s;
	const match = node.raw.match(matchReg);
	const prefix = match?.[1] ?? '';
	const mark = match?.[2] ?? '';
	const checkmark = match?.[3] ?? '';
	const rest = match?.[4] ?? "";
	const nextPrefix = (match?.[5] ?? "").match(matchReg)?.[1]??'';
	const children = [...node.tokens];
	const paragraph = children.shift();
	const itemText = paragraph?.type==='paragraph' ? <Paragraph node={paragraph} /> : <Text>{`\n`}</Text>;
	// return <Text>{node.text}{`\n`}</Text>
	// console.log('LISTITEM: text:' + node.text, '_prefix|' + _prefix + '|', 'prefix|' + prefix + '|');
	return <>
		<Text className='text-slate-400/80 font-extrabold'>
			{_prefix}
			{/* {prefix} */}
			{mark}
			{node.task && (node.checked
				? <>[<Text className='text-green-600'>x</Text>] </>
				: <>{checkmark}</>
			)}
		</Text>
		<FlowContent node={paragraph} prefix={''} />
		{/* {`\n`} */}
		{/* {(match?.[5] ?? "")} */}
		{
			children.map((item, i) => <Text key={i}>
					<FlowContent node={item} prefix={_prefix + prefix+ '  '} />
				</Text>)
		}
		{/* {
			!!children.length
				? children.map((item, i) => <Text key={i}>
					<FlowContent node={item} prefix={_prefix + prefix+ '  '} />
				</Text>)
				: <></>
		} */}
	</>;
}