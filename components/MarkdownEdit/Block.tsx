import { View, Text } from 'react-native';
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
import Node from './Node';
import { Fragment } from 'react';

type NodeType = ParagraphType | RootType | EmphasisType | StrongType;
export default function Block({ node, className, prefix }: { node: NodeType; className?: string; prefix:string }) {
	return <Text>
		{
			node.children.map((item, i) => <Fragment key={i}><Text>{prefix}</Text><Node className={className} key={i} node={item} /></Fragment>)
		}
		{'\n'}
	</Text>;
}