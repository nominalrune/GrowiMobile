import { Image as ImageType } from "mdast";
import { Text, View, Image as ImageComponent } from 'react-native';
export default function Image({ node }: { node: ImageType; }) {
	return <Text>![{node.alt}]({node.url})</Text>;
}