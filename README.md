# @redspark/eslint-config

## Usage
1. Install peer dependencies

Base
```bash
yarn add -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import
```

React
```bash
yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react
```

AngularJs
```bash
yarn add -D eslint-plugin-angular
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
