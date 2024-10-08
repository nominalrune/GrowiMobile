import * as marked from 'lib/marked';
import markedKatex from "marked-katex-extension";
function addLatexSyntax(Marked: typeof marked) {
	// const latex = {
	// 	name: 'latex',
	// 	level: 'block',                                     // Is this a block-level or inline-level tokenizer?
	// 	start(src: string) { return src.match(/^\n\$\$/sm)?.index; }, // Hint to Marked.js to stop and check for a match
	// 	tokenizer(src: string, tokens:unknown) {
	// 		const rule = /^\$\$(\n.*?\n)\$\$$/sm;    // Regex for the complete token, anchor to string start
	// 		const match = rule.exec(src);
	// 		if (match) {
	// 			const token = {                                 // Token to generate
	// 				type: 'latex',                      // Should match "name" above
	// 				raw: match[0],                                // Text to consume from the source
	// 				text: match[1],                        // Additional custom properties
	// 				//tokens: []                                    // Array where child inline tokens will be generated
	// 			};
	// 			// this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
	// 			return token;
	// 		}
	// 	},
	// 	renderer(token:unknown) {
	// 		return `<p></p>`; // parseInline to turn child tokens into HTML
	// 	}
	// };
	// const inlineLatex = {
	// 	name: 'inline-latex',
	// 	level: 'inline',
	// 	start(src: string) { return src.match(/\$[^\$\n]/)?.index; }, // Hint to Marked.js to stop and check for a match
	// 	tokenizer(src: string, tokens:unknown[]) {
	// 		const rule = /\$([^\$].*?[^\$])\$/;    // Regex for the complete token, anchor to string start
	// 		const match = rule.exec(src);
	// 		if (match) {
	// 			const token = {                                 // Token to generate
	// 				type: 'inline-latex',                      // Should match "name" above
	// 				raw: match[0],                                // Text to consume from the source
	// 				text: match[1],                        // Additional custom properties
	// 				//tokens: []                                    // Array where child inline tokens will be generated
	// 			};
	// 			// this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
	// 			return token;
	// 		}
	// 	},
	// 	renderer(token:unknown) {
	// 		return `<p></p>`; // parseInline to turn child tokens into HTML
	// 	}
	// };
	const options = {
		nonStandard: true,
		throwOnError: false,
	};
	Marked.marked.use(markedKatex(options));

	// Marked.marked.use({ extensions: [latex, inlineLatex] });
	return Marked;
}

export default addLatexSyntax;