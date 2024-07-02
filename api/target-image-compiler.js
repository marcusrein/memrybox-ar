import { ImageTargetCompiler } = require("mind-ar-js");

const args = process.argv.slice(2);
const inputFilePath = args[args.indexOf("-i") + 1];
const outputFilePath = args[args.indexOf("-o") + 1];

const compiler = new ImageTargetCompiler();

compiler
	.compileImageTarget(inputFilePath, outputFilePath)
	.then(() => {
		console.log(`Image target compiled successfully: ${outputFilePath}`);
	})
	.catch((err) => {
		console.error("Error compiling image target:", err);
	});
