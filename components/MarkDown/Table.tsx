import { Text, View } from 'react-native';
import { MarkedToken, Tokens } from 'lib/marked';
import Node from './Node';
import { ReactNode } from 'react';
export default function Table({ node }: { node: Tokens.Table; }) {
	return (
		<View className='flex-1 items-center justify-center relative'>
			<Header items={node.header.map((node, i) => <Cell key={i} node={node} />)} />
			{
				node.rows.map((row, i) => <Row items={
					row.map((node, i) => <Cell key={i} node={node} />)
				} key={i} />)
			}
		</View>
	);
}
function Header({ items }: { items: ReactNode[]; }) {
	return <Row className="border bg-slate-200" items={items} />;
}
function Row({ items, style }: { items: ReactNode[], style?: any; }) {
	return (
		<View className='flex-1 self-stretch flex-row' style={style}>
			{items.map((item, i) => (
				<View key={i} className='flex-1 self-stretch border' >
					<Text>{item}</Text>
				</View>
			))}

		</View>
	);
}
function Cell({ node }: { node: Tokens.TableCell; }) {
	return <View className={node.align === 'left' ? `justify-start` : node.align === 'right' ? 'justify-end' : 'justify-center'}>
		<View className='p-1'>
			{
				node.tokens.map((token, i) => <Node key={i} node={token} />)
			}
		</View>
	</View>;
}