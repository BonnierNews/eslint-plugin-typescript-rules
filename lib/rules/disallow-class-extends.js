"use strict";

module.exports = {
  meta: {
    docs: {
      description:
        "Prevent extending classes. Unless it's an Error class.",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },

  create: function (context) {
    function isException(name) {

      const exceptions = [
        "Error",
      ];

      for (const exception of exceptions) {
        if (name === exception) {
          return true;
        }
      }
      return false;
    }

    return {
      ClassDeclaration: function (node) {
        if (!node.superClass) {
          return false;
        }

        if (isException(node.superClass.name)) {
          return false;
        }

        if (node.superClass) {
          context.report(
            node,
            "Extending other classes via inheritance isn't allowed. Use composition instead."
          );
        }
      },
    };
  },
};
