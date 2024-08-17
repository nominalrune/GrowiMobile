import remarkGfm from 'remark-gfm';
import { Root } from 'remark-gfm/lib';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';

export default class Parser{
	static parse(input:string){
		const root=unified().use(remarkGfm).use(remarkParse).parse(input);
		return root;
	}
	static stringify(input:Root){
		const content = unified().use(remarkGfm).use(remarkStringify).stringify(input);
		return content;
	}
}