module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb"],
  "plugins": ["react"],
  "rules": {
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 1,
    "import/no-unresolved": [2, { ignore: ['meteor/*'] }],
    "import/no-extraneous-dependencies": 0,
    "import/no-absolute-path": 0,
    "import/no-named-default": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "one-var": 0,
    "consistent-return": 0,
    "no-empty": 0,
    "react/wrap-multilines": 0,
    "jsx-a11y/img-has-alt": 0,
    "global-require": 0,
    "no-param-reassign": 1,
    "import/extensions": 0,
    "no-case-declarations": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0
  },
  "parserOptions":{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
  globals: {
    Package: true,
    document: true,
    Npm:  true,
  },
};
