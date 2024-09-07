import { Table as TableType } from "mdast";
import { Text, View } from 'react-native';
import { MarkedToken, Tokens } from 'lib/marked';
export default function Table({ node }: { node: Tokens.Table; }) {
	return <Text>{node.raw}</Text>;
}