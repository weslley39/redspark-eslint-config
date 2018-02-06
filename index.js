module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb-base/legacy"],
  "plugins": [],
  "rules": {
    "import/no-unresolved": [2, { ignore: ['meteor/*'] }],
    "import/no-extraneous-dependencies": 0,
    "import/no-absolute-path": 0,
    "import/no-named-default": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "one-var": 0,
    "consistent-return": 0,
    "no-empty": 0,
    "global-require": 0,
    "no-param-reassign": 1,
    "import/extensions": 0,
    "no-case-declarations": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0
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
