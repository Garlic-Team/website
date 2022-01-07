# Getting started

## Installing dependencies

Before continuing make sure you have [NodeJS](https://nodejs.org/) v16.6 or higher installed on your machine. You can
verify your installation with `node -v` in your terminal.

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

::: warning
You need at least Node.js version 16.6.0 to use GCommands.
:::

## Basic client

We start by creating a master file for the bot we're going to run. We'll call it `index.js`.  

Once created, we import [`GClient`](https://garlic-team.js.org/docs/#/docs/gcommands/next/class/GClient) from `gcommands` and initialize it. With this, you will be able to add additional settings for GCommands functionality. [`GClient`](https://garlic-team.js.org/docs/#/docs/gcommands/next/class/GClient) extends the [discord.js client](https://discord.js.org/#/docs/main/stable/class/Client), so you can use all the settings from the [discord.js client](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) in [`GClient`](https://garlic-team.js.org/docs/#/docs/gcommands/next/class/GClient).

:::: code-group
::: code-group-item index.js

```js
require('dotenv').config();
const { GClient, Plugins, Command, Component } = require('gcommands');
const { Intents } = require('discord.js');
const { join } = require('path');

// Set the default cooldown for commands
Command.setDefaults({
	cooldown: '20s',
});

// Set the default onError function for components
Component.setDefaults({
	onError: (ctx, error) => {
		return ctx.reply('Oops! Something went wrong')
	} 
});


// Search for plugins in node_modules (folder names starting with gcommands-plugin-) or plugins folder
Plugins.search(__dirname);

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
	// Set the intents you will be using (https://discordjs.guide/popular-topics/intents.html#gateway-intents)
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

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
::::

GCommands also detects mention prefixes if you use message commands. However, we strongly recommend that you only switch to interactions that are constantly improving and bring a better and easier experience to your users.

Don't forget to create `commands`, `components`, `listeners` folders. If you don't want all the folders, just delete the folders you don't want in [GClient#dirs](https://garlic-team.js.org/docs/#/docs/gcommands/next/typedef/GClientOptions)

::: danger
In any case, do not store the token in `index.js` and preferably not in any `configs.js,ts,json`. Use the [enviroment file](https://dev.to/aadilraza339/what-is-env-file-in-node-js-3h6c). Read more [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token)
:::

That's it! Try running `node index.js` in your terminal!
