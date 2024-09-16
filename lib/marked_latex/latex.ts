import * as marked from 'lib/marked';
const latex = {
	name: 'latex',
	level: 'block',                                     // Is this a block-level or inline-level tokenizer?
	start(src: string) { return src.match(/^\$\$\n/m)?.index; }, // Hint to Marked.js to stop and check for a match
	tokenizer(src: string, tokens) {
		const rule = /^\$\$\n(.*?)\n\$\$$/sm;    // Regex for the complete token, anchor to string start
		const match = rule.exec(src);
		if (match) {
			const token = {                                 // Token to generate
				type: 'latex',                      // Should match "name" above
				raw: match[0],                                // Text to consume from the source
				text: match[1].trim(),                        // Additional custom properties
				tokens: []                                    // Array where child inline tokens will be generated
			};
			// this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
			return token;
		}
	},
	renderer(token) {
		return `<p></p>`; // parseInline to turn child tokens into HTML
	}
};
const inlineLatex = {
	name: 'inline-latex',
	level: 'inline',                                     // Is this a block-level or inline-level tokenizer?
	start(src: string) { return src.match(/^\$[^\$\n]/m)?.index; }, // Hint to Marked.js to stop and check for a match
	tokenizer(src: string, tokens) {
		const rule = /\$([^\$].*?[^\$])\$/;    // Regex for the complete token, anchor to string start
		const match = rule.exec(src);
		if (match) {
			const token = {                                 // Token to generate
				type: 'inline-latex',                      // Should match "name" above
				raw: match[0],                                // Text to consume from the source
				text: match[1].trim(),                        // Additional custom properties
				tokens: []                                    // Array where child inline tokens will be generated
			};
			// this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
			return token;
		}
	},
	renderer(token) {
		return `<p></p>`; // parseInline to turn child tokens into HTML
	}
};

marked.marked.use({ extensions: [latex, inlineLatex] });

export default marked;