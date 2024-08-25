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
import WithText from './WithText';
type FlowContentType =
	WithText<BlockquoteType> | WithText<CodeType> | WithText<HeadingType> | WithText<HtmlType>
	| WithText<ListType> | WithText<ThematicBreakType> | WithText<DefinitionType> | WithText<ParagraphType>
	| WithText<TableType> | WithText<FootnoteDefinitionType>;
export default FlowContentType;