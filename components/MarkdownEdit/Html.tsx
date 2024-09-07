import { Tokens } from 'lib/marked';
import { Text } from 'react-native';
export default function Html({ node }: {
	node: Tokens.HTML | Tokens.Tag;
	prefix?: string;
}) {
	return <Text>
		{node.raw}
		{node.block ? `\n` : ""}
	</Text>;
}