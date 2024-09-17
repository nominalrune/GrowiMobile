import { Tokens } from 'marked';
import WebView from 'react-native-webview';
import { Text, View } from "react-native";
import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
// import MathJax from "mathjax";
// import Latex from 'react-native-latex';

import { SvgXml } from 'react-native-svg';
import { LatexToken } from '../../types/Token';
export default function Math({ node }: { node: LatexToken; }) {
	const adaptor = liteAdaptor();
	RegisterHTMLHandler(adaptor);
	const tex = new TeX({ packages: AllPackages });
	const svg = new SVG({ fontCache: 'none' });
	const doc = mathjax.document("", { InputJax: tex, OutputJax: svg }).convert(node.text);
	const html = adaptor.innerHTML(doc);
	console.log({ html });
	return <>
		<View className='rounded-lg  p-1 m-1'>
			<Text>!!!!!!!!!</Text>
			{/* <WebView
				key={node.text}
				style={{ width: "100%", height: 100, backgroundColor: "transparent" }}
				originWhitelist={['*']}
				source={{
					html: `${html}`
				}} /> */}

			<SvgXml xml={html} width="100%" height="100%" />
		</View></>;
}