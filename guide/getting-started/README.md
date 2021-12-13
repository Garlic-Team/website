# Getting started

## Installing dependencies

Before continuing make sure you have [NodeJS](https://nodejs.org/) v16.6 or higher installed on your machine. You can
verify your installation with `node -v` in your terminal.

:::: code-group
::: code-group-item npm

```sh:no-line-numbers
npm install gcommands@next-dev
```

:::
::: code-group-item yarn

```sh:no-line-numbers
yarn add gcommands@next-dev
```

:::
::: code-group-item pnpm

```sh:no-line-numbers
pnpm add gcommands@next-dev
```

:::
::::

## Basic client

:::tip 
It's recommended to use a .env for storing your bots token.
:::

Let's get started by creating a new GClient! The GClient is the hub that will be running your bot.

:::: code-group
::: code-group-item index.js

```js
require('dotenv').config();
const { GClient } = require('gcommands');
const { Intents } = require('discord.js');
const { join } = require('path');

// Search for plugins in node_modules (folder names starting with gcommands-plugin-) or plugins folder
GClient.gplugins.search(__dirname);

const client = new GClient({
	// Register the directories where your commands/components/listeners will be located.
	dirs: [
		join(__dirname, 'commands'),
		join(__dirname, 'components'),
		join(__dirname, 'listeners')
	],
	// Set the prefix for message commands
	messagePrefix: '!',
	// Set the guild where you will be developing your bot. This is usefull cause guild slash commands update instantly.
	devGuildId: process.env.DEV_SERVER,
	// Set the global cooldown for your bot
	cooldown: '30s',
	// Set the intents you will be using (https://discordjs.guide/popular-topics/intents.html#gateway-intents)
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Listen to warnings and errors.
client.on('error', console.log);
client.on('warn', console.log);

// Login to the discord API
client.login(process.env.token);
```
:::

::: code-group-item .env

```
TOKEN=your discord bot token from discord.dev
DEV_SERVER=your discord guild id here
```

:::

:::

That's it! Try running `node index.js` in your terminal!



