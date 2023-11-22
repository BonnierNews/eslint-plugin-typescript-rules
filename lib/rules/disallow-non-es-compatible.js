"use strict";

module.exports = {
  meta: {
    docs: {
      description:
        "Prevent usage of non EcmaScript compatible functionality when using Typescript, such as decorators, enums, private methods and properties.",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },

  create: function (context) {
    function checkForDecorators(node) {
      if (node.decorators.length === 0) {
        return;
      }
      context.report(node, "Decorators aren't allowed.");
    }

    function checkForPrivateMethod(node) {
      if (node.accessibility !== "private") {
        return;
      }
      context.report(
        node,
        "Private keyword on methods isn't allowed, use native # instead."
      );
      return true;
    }

    return {
      PropertyDefinition: function (node) {
        if (node.accessibility !== "private") {
          return;
        }
        context.report(
          node,
          "Private keyword on properties isn't allowed, use native # instead."
        );
      },

      MethodDefinition: function (node) {
        checkForDecorators(node);
        checkForPrivateMethod(node);
      },

      TSEnumDeclaration: function (node) {
        context.report(
          node,
          "Don't use enums since it is not a type-level extension of JavaScript. Use Objects instead."
        );
      },
    };
  },
};
