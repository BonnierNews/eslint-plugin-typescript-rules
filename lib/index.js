"use strict";

module.exports = {
  rules: {
    "disallow-class-extends": require("./rules/disallow-class-extends.js"),
    "disallow-abstract-class": require("./rules/disallow-abstract-class.js"),
    "disallow-non-es-compatible": require("./rules/disallow-non-es-compatible.js"),
  },
  configs: {
    recommended: {
      plugins: [ "typescript-rules" ],
      parserOptions: { ecmaVersion: 2015 },
      rules: {
        "typescript-rules/disallow-class-extends": "error",
        "typescript-rules/disallow-abstract-class": "error",
        "typescript-rules/disallow-non-es-compatible": "error",
      },
    },
  },
};
