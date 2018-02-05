# @redspark/eslint-config

## Usage
1. Install peer dependencies

1.1 Base
```bash
yarn add -D eslint eslint-config-airbnb-base eslint-plugin-import
```

1.2 React
```bash
yarn add -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

1.3 AngularJs
```bash
yarn add -D eslint eslint-plugin-angular
```

2. Install this package
```bash
yarn add -D @redspark/eslint-config
```

3. Add config into your .eslintrc file
```json
{
  "extends": "@redspark"
}
```

If you will use with `AngularJs`, please add this too:

```json
{
  "plugins": ["angular"],
}
```

If you will use with `React`, please add this too:

```json
{
  "plugins": ["react"],
}
```
