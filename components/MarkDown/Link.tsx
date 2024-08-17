import { Link as LinkType } from "mdast";
import { Text, View } from 'react-native';
import { A } from '@expo/html-elements';
export default function Link({ node }: { node: LinkType; }) {
	return <A href={node.url}>{node.title}</A>;
}