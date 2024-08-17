import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

// config.resolver.resolveRequest = (context, rawModuleName, platform) => {
// 	let moduleName = rawModuleName;

// 	// Resolve fully specified TS imports by stripping extension
// 	const isPackage =
// 		!moduleName.startsWith(".") && !moduleName.startsWith("/");
// 	const isJsOrJsxFile =
// 		!isPackage &&
// 		(moduleName.endsWith(".js") || moduleName.endsWith(".jsx"));
// 	if (isJsOrJsxFile) moduleName = moduleName.replace(/\.[^/.]+$/, "");

// 	return context.resolveRequest(context, moduleName, platform);
// };

export default config;