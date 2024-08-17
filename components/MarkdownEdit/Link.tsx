import { Link as LinkType } from "mdast";
import { Pressable, Text, View } from 'react-native';
export default function Link({ node }: { node: LinkType; }) {
	return <>
		<Text className='text-slate-400/80'>{`\u005b`/* [ */}</Text>
		<Text className="text-slate-800/80">{node.title}</Text>
		<Text className='text-slate-400/80'>{`\u005d`/* ] */}{`\u0028`/* ( */}
		<Text className='underline'>{node.url}</Text>
		{`\u0029`/* ) */}</Text>
		</>;
}