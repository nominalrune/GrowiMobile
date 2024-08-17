import { ListItem as ListItemType, List as ListType } from "mdast";
import Node from './Node';
import { FlatList, Text } from 'react-native';
export default function List({ node }: { node: ListType; }) {
	return <FlatList
		data={node.children}
		renderItem={({ item, index }) => <ListItem mark={node.ordered ? `${index}. ` : '• '} node={item} />}
	/>;
}

function ListItem({ mark, node }: { mark: string, node: ListItemType; }) {
	return <Text>{mark}{
		node.children.map(i => <Node node={i} />)
	}</Text>;
}