import { MarkedToken as _M } from '../lib/marked/lib/marked';
export type MarkedToken = _M | LatexToken | InlineLatexToken;

export type LatexToken={
	type:'blockKatex',
	raw:string,
	text:string,
}
export type InlineLatexToken={
	type:'inlineKatex',
	raw:string,
	text:string,
}