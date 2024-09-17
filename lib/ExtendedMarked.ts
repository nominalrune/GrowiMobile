import marked, { MarkedToken as _M } from "lib/marked";
import addLatexSyntax from './marked_extention/addLatexSyntax';

const _marked = addLatexSyntax(marked);

export default _marked;