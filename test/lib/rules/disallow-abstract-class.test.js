"use strict";

const rule = require("../../../lib/rules/disallow-abstract-class");
const RuleTester = require("@typescript-eslint/rule-tester").RuleTester;
const after = require("mocha").after;
RuleTester.afterAll = after;

const ruleTester = new RuleTester();

ruleTester.run("disallow-abstract-class", rule, {
  valid: [
    { code: "class Foo{}" },
  ],
  invalid: [
    {
      code: "abstract class Foo{}",
      errors: [
        {
          message:
            "Abstract classes aren't allowed.",
          type: "ClassDeclaration",
        },
      ],
    },
  ],
});
