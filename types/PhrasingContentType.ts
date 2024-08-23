import {
	Html as HtmlType,
	Link as LinkType,
	Strong as StrongType,
	Image as ImageType,
	Text as TextType,
	Break as BreakType,
	Delete as DeleteType,
	Emphasis as EmphasisType,
	FootnoteReference as FootnoteReferenceType,
	ImageReference as ImageReferenceType,
	InlineCode as InlineCodeType,
	LinkReference as LinkReferenceType,
} from 'mdast';
import WithText from './WithText';

type PhrasingContentType =  WithText<HtmlType> |
WithText<LinkType> |
WithText<StrongType> |
WithText<ImageType> |
WithText<TextType> |
WithText<BreakType> |
WithText<DeleteType> |
WithText<EmphasisType> |
WithText<FootnoteReferenceType> |
WithText<ImageReferenceType> |
WithText<InlineCodeType> |
WithText<LinkReferenceType>;

export default PhrasingContentType;