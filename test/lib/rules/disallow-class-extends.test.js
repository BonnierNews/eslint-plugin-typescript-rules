"use strict";

const rule = require("../../../lib/rules/disallow-class-extends");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("disallow-class-extends", rule, {
  valid: [
    { code: "class Foo{}" },
    { code: "class FooError extends Error {}" },
  ],
  invalid: [
    {
      code: "class Bar {}; class Foo extends Bar {}",
      errors: [
        {
          message:
            "Extending other classes via inheritance isn't allowed. Use composition instead.",
          type: "ClassDeclaration",
        },
      ],
    },
  ],
});
