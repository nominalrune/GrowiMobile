import { MarkedToken as _M } from '../lib/marked/lib/marked';
export type MarkedToken = _M | LatexToken | InlineLatexToken;

export type LatexToken={
	type:'latex',
	raw:string,
	text:string,
}
export type InlineLatexToken={
	type:'inline-latex',
	raw:string,
	text:string,
}