import { Tokens } from 'marked';
import WebView from 'react-native-webview';
import katex from 'katex';
import { Text, View } from "react-native";
import React from 'react';
import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
// import Latex from 'react-native-latex';
// import {JSDOM} from "jsdom";
export default function InlineKatex({ node }: { node: Tokens.Paragraph; }) {
	const match = node.text.match(/^\$(.*?)\$/sm);
	const text = match ? match[1] : "";
	console.log({ text, nodetext: node.text, raw: node.raw });
	const adaptor = liteAdaptor();
	RegisterHTMLHandler(adaptor);
	const tex = new TeX({ packages: AllPackages });
	const svg = new SVG({ fontCache: 'none' });
	const doc = mathjax.document("", { InputJax: tex, OutputJax: svg }).convert(node.text);
	const html = adaptor.outerHTML(doc);
	console.log({ html });
	return <>
		<WebView
			key={text}
			style={{ height: 200 }}
			originWhitelist={['*']}
			source={{
				html: `<p>${html}</p>`
			}} /></>;
}