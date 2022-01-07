# Upgrading from legacy to v9 (next gcommands)

## Before you start

The next version needs Nodejs v16.6 or higher to use, so make sure you have that version or higher. If you need to find out your version, just open a terminal and type `node -v`. If you don't have a sufficient version, then upgrade.

Remember that GCommands runs on discord.js, so make sure you have the latest version of [discord.js](https://npmjs.org/discord.js) 13.x

:::: code-group
::: code-group-item npm
```sh:no-line-numbers
npm install gcommands
npm install gcommands@next # for unstable, development next version
```
:::
::: code-group-item yarn
```sh:no-line-numbers
yarn add gcommands
yarn add gcommands@next # for unstable, development next version
```
:::
::: code-group-item pnpm
```sh:no-line-numbers
pnpm add gcommands
yarn add gcommands@next # for unstable, development next version
```
:::
::::

## Plugins
We have big news, plugins!  
You can make custom plugins that add something to GCommands.  
Read more [here](../plugins/first-plugin)

## Components
We have added full support for the component handler.  
Read more [here](../getting-started/first-component)

## GCommandsClient
^ renamed to `GClient`

We renamed `GCommandsClient` to `GClient` because the name was too long.

```diff
- GCommandsClient
+ GClient
```

### GCommandsClient#loader
We have completely deleted the `loader` option, which has been replaced by `dirs` which is but an array.

### GCommandsClient#commands
We have completely deleted the `commands` option, for which there is no longer a substitute, and the types shall be specified in the commands.

### GCommandsClient#defaultCooldown
^ renamed to `GClient#cooldown`  
Property `defaultCooldown` has been renamed to `cooldown`

### GClient#dirs
As mentioned above, this is a replacement for `loader`.

```js
dirs: [
    path.join(__dirname, 'commands')
    path.join(__dirname, 'events')
]
```

### GClient#messagePrefix
We added property `messagePrefix` which is used to set the prefix for message commands.

```js
messagePrefix: '!'
```

## Commands
We are adding a completely new system for commands.

You can name the `ctx` variable whatever you want, and feel free to import just some functions like this: `{ user }`.  
If you want to know what all is in the CommandContext i.e. `ctx`, have a look [here](https://garlic-team.js.org/docs/#/docs/gcommands/next/class/CommandContext)

```js
const { Command, CommandType } = require('gcommands');
new Command({
    name: 'omgg',
    description: 'hello',
    type: [ CommandType.SLASH ],
    run: (ctx) => {
        ctx.reply('lol')
    }
})
```

### RunOptions#respond
^ replaced with `RunOptions#reply`

### CommandOptions#type
As mentioned above, we have deleted the properties in the client, and added them purely to the commands. It now uses an array with types, rather than `'slash': 'something', 'context': 'something'`

### CommandOptions#arguments | CommandOptions#arrayArgs | CommandOptions#objectArgs
^ renamed from `args` to `arguments`

arrayArgs and objectArgs have been completely deleted. For better typings we recommend to use `arguments.getString()` and similar functions which can be found [here](https://discord.js.org/#/docs/main/stable/class/CommandInteractionOptionResolver)  
  
However, if you would like to use arrayArgs too much, you can use `ctx.arguments.options[0].value`

## Listeners
^ renamed from Events to Listeners  
In the run function there is only a parameter for the event, but djs adds `client` everywhere, so you can use for example `message.client`  
  
Listener has a `name`, and then a name in options.  
The `name` in options is so that they don't get duplicated and you can have multiple listeners.

```js
const { Listener } = require('gcommands');
new Listener({
    event: 'ready' // event for listening
    name: 'botready', // what????? This is a uniqueId for an event, so you can have more of them and not get replaced.
    run: (client) => {
        console.log(`${client.user.tag} ready!`)
    }
})
```

## Example
Don't forget to check out this full guide!  
You can see the example bot [here](https://github.com/Garlic-Team/GCommands/tree/next/example)
