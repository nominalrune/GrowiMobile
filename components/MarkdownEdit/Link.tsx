// import { Link as LinkType } from "mdast";
import  { Tokens } from 'lib/marked';
import { Pressable, Text, View } from 'react-native';
import FlowContent from './FlowContent';
export default function Link({ node }: { node: Tokens.Link; }) {
	return <>
		<Text className='text-slate-400/80'>{`\u005b`/* [ */}</Text>
		<Text className="text-slate-800/80">{node.tokens.map((item,i)=><FlowContent key={i} node={item} />)}</Text>
		<Text className='text-slate-400/80'>{`\u005d`/* ] */}{`\u0028`/* ( */}</Text>
		<Text className='underline'>{node.href}</Text>
		<Text className='text-slate-400/80'>{`\u0029`/* ) */}</Text>
		</>;
}