"use strict";

const rule = require("../../../lib/rules/disallow-non-es-compatible");
const RuleTester = require("@typescript-eslint/rule-tester").RuleTester;
const parser = require("@typescript-eslint/parser");
const after = require("mocha").after;
RuleTester.afterAll = after;

const ruleTester = new RuleTester({ languageOptions: { parser } });

ruleTester.run("disallow-non-es-compatible", rule, {
  valid: [
    { code: "const kaka = { Up: 1}" },
    { code: "class Foo { #bar; }" },
    { code: "class Foo { #bar() {} }" },
  ],
  invalid: [
    {
      code: "enum Foo { Up = 1}",
      errors: [
        {
          message:
            "Don't use enums since it is not a type-level extension of JavaScript. Use Objects instead.",
          type: "TSEnumDeclaration",
        },
      ],
    },
    {
      code: `class Foo {
        @foodec()
        foo() {
          return "foo";
        }
      }`,
      errors: [
        {
          message: "Decorators aren't allowed.",
          type: "MethodDefinition",
        },
      ],
    },
    {
      code: "class Foo { private bar; }",
      errors: [
        {
          message:
            "Private keyword on properties isn't allowed, use native # instead.",
          type: "PropertyDefinition",
        },
      ],
    },
    {
      code: "class Foo { private bar() {}; }",
      errors: [
        {
          message:
            "Private keyword on methods isn't allowed, use native # instead.",
          type: "MethodDefinition",
        },
      ],
    },
  ],
});
