# @redspark/eslint-config

## Usage
1. Install peer dependencies

1.1 Pure Js
```bash
yarn add -D eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import
```

1.2 React
```bash
yarn add -D eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import
```

1.3 AngularJs
```bash
yarn add -D eslint eslint-plugin-angular
```

2. Install this package
```bash
yarn add -D weslley39/redspark-eslint-config
```

3. Add config into your .eslintrc file for use `Pure Js`
```json
{
  "extends": "@redspark"
}
```

3.1. Add config into your .eslintrc file for use `AngularJs`

```json
{
  "extends": "@redspark/eslint-config/angular"
}}
```
3.2. Add config into your .eslintrc file for use `React`

```json
{
  "extends": "@redspark/eslint-config/react"
}
```

Obs: To use with Gulp, please install

```bash
yarn add -D gulp-eslint
```
