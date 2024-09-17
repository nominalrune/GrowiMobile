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

import { SvgCss } from 'react-native-svg/css';
import { LatexToken } from '../../types/Token';
export default function Math({ node }: { node: LatexToken; }) {
	const adaptor = liteAdaptor();
	RegisterHTMLHandler(adaptor);
	const tex = new TeX({ packages: AllPackages });
	const svg = new SVG({ fontCache: 'none' });
	const doc = mathjax.document("", { InputJax: tex, OutputJax: svg }).convert(node.text);
	const html = adaptor.serializeXML(doc);
	const match = html.match(/width="(.*?)ex".*?height="(.*?)ex"/);
	const width = Number(match?.[1]) * 10;
	const height = Number(match?.[2]) * 10;
	console.log({ html });
	return <>
		<View className='rounded-lg p-1 m-1'>
			<WebView
				key={node.text}
				style={{ width: "100%", height, backgroundColor: "transparent", }}
				originWhitelist={['*']}
				scrollEnabled={true}
				source={{
					// html: `${html}`
					html: `${html.replace("<svg style=\"", "<svg style=\"height:100%; width:100%; ")}`
				}} />
			{/* <SvgCss style={{backgroundColor:"white"}} xml={html} width={"100%"} height={"100%"} /> */}
		</View></>;
}