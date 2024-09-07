import  { Tokens } from 'lib/marked';
import { Pressable, Text, View } from 'react-native';
import Node from './Node';
import { MarkedToken } from 'marked';
export default function Link({ node }: { node: Tokens.Link; }) {
	return <>
		<Text className='text-slate-400/80'>{`\u005b`/* [ */}</Text>
		<Text className="">{node.tokens.map((item,i)=><Node key={i} node={item as MarkedToken} />)}</Text>
		<Text className='text-slate-400/80'>{`\u005d`/* ] */}{`\u0028`/* ( */}</Text>
		<Text className='underline'>{node.href}</Text>
		<Text className='text-slate-400/80'>{`\u0029`/* ) */}</Text>
		</>;
}