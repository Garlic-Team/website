# What are plugins?

GCommands Next has started to support plugins. A plugin is an addition to GCommands that will make your job easier. Users can create custom plugins for inhibitors, events and such. GCommands has a couple of official plugins, which can be found [here](https://github.com/Garlic-Team/gcommands-addons/).

You always install the plugin as follows:
:::: code-group
::: code-group-item npm

```sh:no-line-numbers
npm install gcommands-plugin-{name}
npm install @gcommands/plugin-{name} # for official plugins 
```

:::
::: code-group-item yarn

```sh:no-line-numbers
yarn add gcommands-plugin-{name}
yarn add @gcommands/plugin-{name} # for official plugins 
```

:::
::: code-group-item pnpm

```sh:no-line-numbers
pnpm add gcommands-plugin-{name}
pnpm add @gcommands/plugin-{name} # for official plugins 
```

:::
::::

In our case we use `npm i @gcommands/plugin-moreevents`.

Once installed, all you have to do is make sure you have the following in the main file:
```js
const { Plugins } = require('gcommands');

Plugins.search(__dirname);
```

Sometimes, as with the moreevents plugin, the plugin needs to be imported to modify the typings for discord.js events so that you can access the events more easily.
```js
require('@gcommands/plugin-moreevents');
```

That's it! Now we can use other events added by moreevents. For official plugins, you will always find implementation instructions in the README.md and we hope that this will be the case for community plugins as well.

## GCommands Plugin Language

For the `@gcommands/pugin-language` plugin you can stay here for a while, because it has much more integration than it seems. With this plugin you are able to customize basic responses which you can find [here](https://github.com/Garlic-Team/gcommands/blob/next/src/responses.json).

You just need to add the following to your lang file:
```json
{
   "langname": {
      "NOT_FOUND": "Invalid command",
      "ERROR": "Command is broken :((",
      "COOLDOWN": "Please wait {duration}",
      "ARGUMENT_REQUIRED": "Please provide argument {name} with type {type}",
      "ARGUMENT_TIME": "Time, please re-run command"
    }
}
```

You can check full readme [here](https://github.com/Garlic-Team/gcommands-addons/blob/master/packages/plugin-language/README.md)