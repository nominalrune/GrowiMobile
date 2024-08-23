import { Nodes } from 'mdast';

type WithText<T> = Omit<T, 'children'> & (T extends { children: Array<infer U>; } ? { text: string; children: WithText<U>[]; } : { text: string; });

export default WithText;