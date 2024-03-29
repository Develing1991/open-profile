module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname
	},
	plugins: ['react'],
	rules: {
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'react/react-in-jsx-scope': 'off'
		// '@typescript-eslint/no-unused-vars': 'off'
	}
};
