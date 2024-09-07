import { Text } from 'react-native';
import { Tokens } from 'lib/marked';
export default function Table({ node }: { node: Tokens.Table; }) {
	return <Text>{node.raw}</Text>;
}