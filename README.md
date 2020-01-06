# eslint-config

This package provides multiple eslint-configurations. You should extend the appropriate config
depending on your use-case.

Each rule and its associated configuration has been selected with the following goals in mind:

- Maximum readability/understanding of your code
- Maximum (ease of) refactorability of your code
- Reduce or catch common pitfalls and code-smells
- Adhere to commonest best practices
- Any rules that might cause excessive errors (that are not auto-fixable) are set to "warn"

For these reasons, much of the rules are enabled and most are using the default configuration
except where it makes sense for achieving said goals. When used with Prettier, conflicting rules
are disabled.

## Installation

```sh
npm install --save-dev @therealklanni/eslint-config eslint-plugin-import eslint
```

If you'll be using any of the [Prettier](https://prettier.io)-based configs, please also install

```sh
npm install --save-dev eslint-{config,plugin}-prettier prettier
```

For TypeScript configs, you'll also need [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

```sh
npm install --save-dev @typescript-eslint/{parser,eslint-plugin}
```

> You might also consider using [@therealklanni/prettier-config](https://github.com/therealklanni/prettier-config)

## Usage

In your ESLint config, extend the config you want to use. The configs provided are not intended to
be combinatory, please use only the provided config that most closely suits your use-case (in other
words, pick only one).

See [Provided configurations](#provided-configurations) for a list of available configs.

```json
{
  "eslintConfig": {
    "extends": ["@therealklanni"]
  }
}
```

The example above would extend only the base configuration. To use a more specific configuration,
use the following example below as a guideline.

```json
{
  "eslintConfig": {
    "extends": ["@therealklanni/eslint-config/prettier-node"]
  }
}
```

> Note: if you would like to extend other configs in addition to those provided by this package,
> it's recommended to define the config from this package **last** to avoid conflicts.

## Provided configurations

To see the exact rules applied by each config, view the related source file. Each config extends
the `base` config, and more specific configs combine and extend the configs with matching names.
For example, `prettier-node` extends `prettier` and `node` configs, which themselves extend from
`base`, which in turn extends from `eslint:recommended`.

Not all rules found in the sources will necessarily apply, depending on the config used. For
example, all Prettier-based configs will automatically disable rules that would otherwise conflict
with how Prettier formats automatically.

- `base` — extends the `eslint:recommended` config, with added base rules
- `node` — sets globals and rules for Node
- `node-cli`
- `prettier` — formats with Prettier
- `prettier-node` — same as Prettier, with Node globals
- `prettier-node-cli`
- `typescript` — TypeScript via [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- `typescript-prettier` — TS with Prettier

### Supplemental configurations

These configurations can be included (via extends) as supplementary to the above, or used
stand-alone. They do not extend the base or other configs and instead just provide a set of
sensible defaults for a specific plugin.

- `jest` — configures [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

#### Example usage:

```json
{
  "extends": [
    "@therealklanni/eslint-config/jest",
    "@therealklanni/eslint-config/prettier-node",
  ]
}
```
