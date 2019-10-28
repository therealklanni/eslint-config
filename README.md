# eslint-config

This package provides multiple eslint-configurations. You should extend the appropriate config depending on your use-case.

## Installation

```sh
npm install --save-dev @therealklanni/eslint-config eslint
```

If you'll be using any of the [Prettier](https://prettier.io)-based configs, please also install

```sh
npm install --save-dev eslint-{config,plugin}-prettier
```

## Usage

In your ESLint config, extend the config you want to use. The configs provided are not intended to be combinatory, please use only the provided config that most closely suits your use-case (in other words, pick only one). See [Provided configurations](#provided-configurations) for more details.

```json
{
  "eslintConfig": {
    "extends": ["@therealklanni"]
  }
}
```

The example above would extend only the base configuration. To use a more specific configuration, use the following example below as a guideline.

```json
{
  "eslintConfig": {
    "extends": ["@therealklanni/eslint-config/prettier-node"]
  }
}
```

> Note: if you would like to extend other configs in addition to those provided by this package, it's recommended to define the config from this package **last** to avoid conflicts.

## Provided configurations

To see the exact rules applied by each config, view the related source file. Each config extends the `base` config, and more specific configs combine and extend the configs with matching names. For example, `prettier-node` extends `prettier` and `node` configs, which themselves extend from `base`, which in turn extends from `eslint-recommended`.

Not all rules found in the sources will necessarily apply, depending on the config used. For example, all Prettier-based configs will automatically disable rules that would otherwise conflict with how Prettier formats automatically.

- `base` — extends the `eslint-recommended` config, with added base rules
- `node` — sets globals for Node
- `prettier` — formats with Prettier
- `prettier-node` — same as Prettier, with Node globals
