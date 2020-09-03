# eslint-config ![npm downloads](https://img.shields.io/npm/dt/@therealklanni/eslint-config?logo=npm)

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

> 💁‍♂️ You might also consider using
> [@therealklanni/prettier-config](https://github.com/therealklanni/prettier-config)

## Installation

```sh
npm install --save-dev @therealklanni/eslint-config
```

## Post install

After installation, you'll be prompted to install the devDependencies requirements. The command is
as follows. Replace `CONFIG_NAME` with the name of the config (as shown in [Provided
configurations](#provided-configurations)). Use the command again for any additional [Supplemental
configurations](#supplemental-configurations).

```
npm explore @therealklanni/eslint-config -- npm run @deps CONFIG_NAME $(pwd)
```

> This command will automatically install the necessary devDependencies after confirmation. Note
> that `$(pwd)` is required to tell the script where to install the dependencies, or you can supply
> the path manually.

> If you prefer to install the devDependencies on your own, they will be listed before confirmation
> and then you can cancel the script (press `n` or `Ctrl-C`).

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
- `prettier` — formats with Prettier
- `typescript` — TypeScript via
  [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- `typescript-prettier` — TS with Prettier
- `jsx` — JSX
- `jsx-cra` — `eslint-config-react-app` config provided by
  [create-react-app](https://github.com/facebook/create-react-app) with JSX defaults
  > Use this when you want CRA's JSX defaults in a non-CRA project

### Supplemental configurations

These configurations can be included (via extends) as supplementary to the above, or used
stand-alone. They do not extend the base or other configs and instead just provide a set of
sensible defaults for a specific plugin.

- `node` — sets globals and rules for Node
- `node-cli`
- `jest` — configures [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

#### Example usage:

```json
{
  "extends": [
    "@therealklanni/eslint-config/jest",
    "@therealklanni/eslint-config/node",
    "@therealklanni/eslint-config/prettier"
  ]
}
```
