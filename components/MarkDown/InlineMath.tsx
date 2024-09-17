import { Tokens } from 'marked';
import WebView from 'react-native-webview';
import { Text, View } from "react-native";
import React from 'react';
import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
import { SvgXml } from 'react-native-svg';
import { InlineLatexToken, MarkedToken } from '../../types/Token';
// import Latex from 'react-native-latex';
// import {JSDOM} from "jsdom";
export default function InlineMath({ node }: { node: InlineLatexToken; }) {
	console.log({ nodetext: node.text, raw: node.raw });
	const adaptor = liteAdaptor();
	RegisterHTMLHandler(adaptor);
	const tex = new TeX({ packages: AllPackages });
	const svg = new SVG({ fontCache: 'none' });
	const doc = mathjax.document("", { InputJax: tex, OutputJax: svg }).convert(node.text, {
		display: false,
	});
	const html = adaptor.innerHTML(doc);

	const match = html.match(/width="(.*?)ex".*?height="(.*?)ex"/);
	const width = Number(match?.[1]);
	const height = Number(match?.[2]);
	// console.log({ html });
	return <View>
		<WebView
			key={node.text}
			style={{ width: width * 11, height: height * 12, backgroundColor: "transparent", }}
			source={{
				// html
				html: `${html.replace("<svg style=\"", `<svg style="height:${height * 4}ex; width:${width * 4}ex; `)}`
			}} />
		{/* <SvgXml xml={html} width="100%" height="100%" /> */}
	</View>;
}