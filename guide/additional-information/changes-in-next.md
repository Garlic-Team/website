# Upgrading from legacy to next

## Before you start

The next version needs Nodejs v16.6 or higher to use, so make sure you have that version or higher. If you need to find out your version, just open a terminal and type `node -v`. If you don't have a sufficient version, then upgrade.

Remember that GCommands runs on discord.js, so make sure you have the latest version of [discord.js](https://npmjs.org/discord.js) 13.x

:::: code-group
::: code-group-item npm
```sh:no-line-numbers
npm install gcommands@next
```
:::
::: code-group-item yarn
```sh:no-line-numbers
yarn add gcommands@next
```
:::
::: code-group-item pnpm
```sh:no-line-numbers
pnpm add gcommands@next
```
:::
::::

## GCommandsClient
^ renamed to `GClient`

We renamed `GCommandsClient` to `GClient` because the name was too long.

```diff
- GCommandsClient
+ GClient
```

## GCommandsClient#loader
We have completely deleted the `loader` option, which has been replaced by `dirs` which is but an array.

## GCommandsClient#commands
We have completely deleted the `commands` option, for which there is no longer a substitute, and the types shall be specified in the commands.

## GCommandsClient#defaultCooldown
^ renamed to `GClient#cooldown`  
Property `defaultCooldown` has been renamed to `cooldown`

## GClient#dirs
As mentioned above, this is a replacement for `loader`.

```js
dirs: [
    path.join(__dirname, 'commands')
    path.join(__dirname, 'events')
]
```

## GClient#messagePrefix
We added property `messagePrefix` which is used to set the prefix for message commands.

```js
messagePrefix: '!'
```
