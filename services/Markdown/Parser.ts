import { MarkedToken } from 'lib/marked';
import marked from 'lib/marked_latex/latex';

export default class Parser {
	static parse(input: string) {
		const tokens = marked.lexer(input) as MarkedToken[];
		return tokens;
	}
	static stringify(input: MarkedToken[]) {
		const content = input.map(i=>i.raw).join("\n");
		return content;
	}
}
