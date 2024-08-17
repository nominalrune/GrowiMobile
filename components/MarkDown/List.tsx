import { ListItem as ListItemType, List as ListType, Paragraph as ParagraphType } from "mdast";
import Node from './Node';
import { FlatList, Text, View } from 'react-native';
import Paragraph from './Paragraph';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
export default function List({ node }: { node: ListType; }) {
	return <View className="flex flex-col justify-start">{
		node.children.map((item, i) => <ListItem key={i} mark={node.ordered ? `${i + 1}.` : '・'} node={item} />)
	}</View>;
	// return <FlatList
	// 	data={node.children}
	// 	renderItem={({ item, index }) => <ListItem key={index} mark={node.ordered ? `${index}. ` : '• '} node={item} />}
	// />;
}

function ListItem({ mark, node }: { mark: string, node: ListItemType; }) {
	const [isChecked, setChecked] = useState(!!node.checked);
	const children = [...node.children];
	const paragraph = children.shift();
	if (!paragraph) { return <></>; }
	return <>
		<View className='flex flex-row items-center'>
			<Text>{mark}</Text>
			{(typeof node.checked === 'boolean') && <View className='mx-1'>
				<Checkbox
					value={isChecked}
					onValueChange={setChecked}
					color={isChecked ? '#4630EB' : undefined}
				/>
			</View>}
			<Paragraph node={paragraph as ParagraphType} />
		</View>
		<View className='pl-4'>{
			children.map((item, i) => <Node key={i} node={item} />)
		}</View></>;
}