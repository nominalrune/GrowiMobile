import { ListItem as ListItemType, List as ListType, Paragraph as ParagraphType } from "mdast";
import Node from './Node';
import { FlatList, Text, View } from 'react-native';
import Paragraph from './Paragraph';
import { useState } from 'react';
import WithText from '../../types/WithText';
import { Tokens } from 'lib/marked';
import Checkbox from 'expo-checkbox';
export default function List({ node, prefix }: { node: Tokens.List; prefix?: string; }) {
	// return <Text>{node.text}</Text>
	return <View className="justify-start mb-2">
		{
			node.items.map((item, i) => <ListItem key={i} node={item} depth={prefix ?? 0} />)
		}
	</View>;
}

function ListItem({ node, depth = 0 }: { node: Tokens.ListItem; depth?: number; }) {
	const children = [...node.tokens];
	const paragraph = children.shift();
	return <View className={depth > 0 ? 'pl-4' : ""}>
		<View className='flex-row'>
			<Text className=''>・</Text>
			{node.task && <Checkbox style={{marginHorizontal:4}} value={node.checked} />}
			{paragraph && <Node node={paragraph} />}
		</View>
		<View>
			{
				children.map((item, i) => <Node key={i} node={item} prefix={depth + 1} />
				)
			}
		</View>
	</View>;
}