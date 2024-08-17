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

type NodeType = BlockquoteType | BreakType | CodeType |
	DeleteType | DefinitionType | EmphasisType | HeadingType | HtmlType | ImageType | ImageReferenceType | InlineCodeType | LinkType | LinkReferenceType | ListType | ListItemType | ParagraphType | RootType | StrongType | TableType | TextType | ThematicBreakType
	| PhrasingContentType | TableCell | TableRow | Yaml | FootnoteDefinitionType;
export default function Node({ node }: { node: NodeType; }) {
	switch (node.type) {
		case 'blockquote':
			return <Blockquote node={node} />;
		case 'code':
			return <Code node={node} />;
		case 'emphasis':
		case 'strong':
			return <Strong node={node} />;
		case 'heading':
			return <Heading node={node} />;
		case 'html':
			return <Html node={node} />;
		case 'image':
			return <Image node={node} />;
		case 'link':
			return <Link node={node} />;
		case 'list':
			return <List node={node} />;
		case 'inlineCode':
			return <InlineCode node={node} />;
		case 'paragraph':
			return <Paragraph node={node} />;
		case 'table':
			return <Table node={node} />;
		case 'text':
			return <Text>{node.value}</Text>;
		case 'break':
			return <View></View>;
		default:
			return <Text>(not defined)</Text>;
	}
}