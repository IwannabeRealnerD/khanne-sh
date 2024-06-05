/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"plugin:@cspell/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "boundaries"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"]
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			typescript: { alwaysTryTypes: true }
		},
		"boundaries/elements": [
			{
				type: "lib",
				pattern: "src/lib"
			},
			{
				type: "test",
				pattern: "src/test"
			},
			{ type: "routes", pattern: "routes" }
		]
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"@cspell/spellchecker": ["error", { checkComments: false }],
		// "boundaries/element-types": [
		// 	"error",
		// 	{
		// 		default: "allow",
		// 		rules: [
		// 			// {
		// 			// 	from: "lib",
		// 			// 	disallow: ["routes"]
		// 			// },
		// 			// {
		// 			// 	from: "test",
		// 			// 	disallow: ["routes"]
		// 			// }
		// 		]
		// 	}
		// ]
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser"
			}
		}
	]
};
