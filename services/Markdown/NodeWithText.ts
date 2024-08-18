import { Nodes } from 'mdast';

type NodeWithText = Nodes & { children?: NodeWithText[], text: string; };
export default NodeWithText;