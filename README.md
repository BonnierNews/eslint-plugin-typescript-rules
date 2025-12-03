# Eslint plugin typescript rules

[![Tests](https://github.com/BonnierNews/eslint-plugin-typescript-rules/actions/workflows/run-tests.yml/badge.svg)](https://github.com/BonnierNews/eslint-plugin-typescript-rules/actions/workflows/run-tests.yml)

A plugin for enforcing some Javascript best practices when using Typescript as "typed" Javascript. This plugin can also be used together with Javascript to prevent the usage of Class extends. 

## Usage

Install `eslint` and the plugin `npm i eslint @bonniernews/eslint-plugin-typescript-rules --save-dev`

Add `typescript-rules` to the plugins section of your .eslintrc configuration file. You can omit the eslint-plugin- prefix:

```json
{
  "plugins": ["typescript-rules"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "typescript-rules/disallow-class-extends": "error",
    "typescript-rules/disallow-abstract-class": "error",
    "typescript-rules/disallow-non-es-compatible": "error"
  }
}
```

## Recommended
This plugin exports a recommended configuration that includes all the rules enabled.

To enable this configuration use the extends property in your .eslintrc config file:
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:typescript-rules/recommended"
  ]
}
```

## Rules
 <!-- begin auto-generated rules list -->

| Name                                                                   | Description                                                                                                                                |
| :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [disallow-abstract-class](docs/rules/disallow-abstract-class.md)       | Prevent usage of abstract classes.                                                                                                         |
| [disallow-class-extends](docs/rules/disallow-class-extends.md)         | Prevent extending classes. Unless it's an Error class.                                                                                     |
| [disallow-non-es-compatible](docs/rules/disallow-non-es-compatible.md) | Prevent usage of non EcmaScript compatible functionality when using Typescript, such as decorators, enums, private methods and properties. |

<!-- end auto-generated rules list -->

## License

Released under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contributing

Bumping the version in package.json will automatically publish to NPM and GitHub
