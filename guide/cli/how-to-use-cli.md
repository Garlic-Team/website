# What is a CLI?

CLI stands for [Command-Line Interface](https://en.wikipedia.org/wiki/Command-line_interface).

We created the CLI to make it easier for you to create your projects using GCommands.

Our CLI can generate a basic project, a component (command, listener) for you.

:::: code-group
::: code-group-item npm

```sh:no-line-numbers
npm install @gcommands/cli -g
```

:::
::: code-group-item yarn

```sh:no-line-numbers
yarn global add @gcommands/cli
```

:::
::: code-group-item pnpm

```sh:no-line-numbers
pnpm add @gcommands/cli --global
```

:::
::::

Then when you install `@gcommands/cli`, it will register the `gcommands` and `gc` commands

It is possible that `gc` will not work, so we also made a long version of `gcommands`

## Create a project

So once you have cli installed and you want to create a project, there is nothing easier than to open the folder in which you want the project to be created and you use:
```bash
$ gcommands new

√ What's the name of your project? ... myfirstbot
√ Select a language for your project » JavaScript
√ Select a template for your project » Bot template
√ Cloning the repository
√ Moving the folder & Creating config
√ Installing dependencies
```

Then you fill in the questions, and hit enter. The project will be created.

## Existing project

If you already have a project, and you want to use the GCommands CLI for component generation, just use the `gcommands init` command
```bash
gcommands init

√ Select a language for your project » JavaScript
√ What's the name of your base directory? | Leave empty if you don't have ... src
√ What's the name of your commands directory? | Leave empty if you don't have ... commands
√ What's the name of your listeners directory? | Leave empty if you don't have ... listeners
√ What's the name of your inhibitors directory? | Leave empty if you don't have ... inhibitors
√ What's the name of your plugins directory? | Leave empty if you don't have ... plugins
√ Generating config
```

```
├── node_modules
├── package.json
└── src
    └── plugins
        └── ...
    └── listeners
        └── ...
    └── commands
        └── ...
    └── inhibitors
        └── ...
    └── index.js
```