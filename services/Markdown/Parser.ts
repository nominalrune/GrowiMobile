import remarkGfm from 'remark-gfm';
import type { Root, Nodes } from 'mdast';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import NodeWithText from './NodeWithText';

export default class Parser {
	static parse(input: string) {
		const root = unified().use(remarkGfm).use(remarkParse).parse(input);
		// return root;
		return putTextContent(root, input.split('\n'));
	}
	static stringify(input: Root) {
		const content = unified().use(remarkGfm).use(remarkStringify).stringify(input);
		return content;
	}
}

function putTextContent(node: Nodes, texts: string[]): NodeWithText {
	const textContent = [...texts]
		.filter(i => !!i)
		.splice((node.position?.start.line ?? 1) - 1, 1 + (node.position?.end.line ?? 0) - (node.position?.start.line ?? 0))
		.map((line, i, arr) => (i === 0
			? line.substring(
				(node.position?.start.column ?? 1) - 1,
				node.position?.start.line === node.position?.end.line ? (node.position?.end.column ?? 1) - 1 : undefined
			)
			: i === arr.length
				? line.substring(
					0,
					(node.position?.end.column ?? 1) - 1
				)
				: line
		))
		.join('\n');
	console.log(node.type, textContent);
	const content = { ...node, children: ('children' in node ? node.children : []).map(item => putTextContent(item, texts)), text: textContent };
	return content;
}