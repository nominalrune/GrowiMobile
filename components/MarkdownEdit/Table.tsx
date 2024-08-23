import { Table as TableType } from "mdast";
import { Text, View } from 'react-native';
import WithText from '../../types/WithText';
export default function Table({ node }: { node: WithText<TableType>; }) {
	return <Text>{node.text}</Text>;
}