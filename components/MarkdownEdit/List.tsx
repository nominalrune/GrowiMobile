import Node from './Node';
import { Text } from 'react-native';
import { Tokens } from 'lib/marked';
import { MarkedToken } from 'marked';
export default function List({ node, prefix }: { node: Tokens.List; prefix?: string; }) {
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
	const children = [...node.tokens];
	const listItemText = children.shift();
	return <>
		<Text className='text-slate-400/80 font-extrabold'>
			{_prefix}
			{prefix}
			{mark}
			{node.task && (node.checked
				? <>[<Text className='text-green-600'>x</Text>] </>
				: <>{checkmark}</>
			)}
		</Text>
		{listItemText
			? <><Node node={listItemText as MarkedToken} prefix={''} /><Text>{`\n`}</Text></>
			: `\n`}
		{
			children.map((item, i) => <Text key={i}>
				<Node node={item as MarkedToken} prefix={_prefix + prefix + '  '} />
			</Text>)
		}
	</>;
}