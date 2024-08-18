import {
	Blockquote as BlockquoteType,
	Break as BreakType,
	Code as CodeType,
	Definition as DefinitionType,
	Delete as DeleteType,
	Emphasis as EmphasisType,
	Heading as HeadingType,
	Html as HtmlType,
	Image as ImageType,
	ImageReference as ImageReferenceType,
	InlineCode as InlineCodeType,
	Link as LinkType,
	LinkReference as LinkReferenceType,
	List as ListType,
	ListItem as ListItemType,
	Paragraph as ParagraphType,
	Root as RootType,
	Strong as StrongType,
	Table as TableType,
	Text as TextType,
	ThematicBreak as ThematicBreakType,
	FootnoteDefinition as FootnoteDefinitionType,
	PhrasingContent as PhrasingContentType,
	TableCell,
	TableRow,
	Yaml,
} from 'mdast';
import List from './List';
import Blockquote from './Blockquote';
import Code from './Code';
import Strong from './Strong';
import Heading from './Heading';
import Html from './Html';
import Image from './Image';
import Link from './Link';
import InlineCode from './InlineCode';
import Paragraph from './Paragraph';
import Table from './Table';
import { Text, View } from 'react-native';
type FlowContentType =
  BlockquoteType | CodeType | HeadingType | HtmlType 
  | ListType | ThematicBreakType | DefinitionType | ParagraphType
  |TableType|FootnoteDefinitionType
interface Prop {
	node: FlowContentType;
	prefix?: string;
}
export default function FlowContent({ node, prefix, }: Prop) {
	switch (node.type) {
		case 'blockquote':
			return <Blockquote node={node}  prefix={prefix}/>;
		case 'code':
			return <><Code node={node}  prefix={prefix}/></>;
		case 'heading':
			return <Heading node={node}  prefix={prefix}/>;
		case 'html':
			return <><Text>{prefix}</Text><Html node={node} /></>;
		case 'list':
			return <><List node={node} prefix={prefix} /></>;
		case 'paragraph':
			return <Paragraph node={node} prefix={prefix} />;
		case 'table':
			return <Table node={node}  prefix={prefix}/>;
		default:
			return <Text>(not defined)</Text>;
	}
}