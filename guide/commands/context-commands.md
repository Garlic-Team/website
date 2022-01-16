# Creating your context menu command

Before we dive into the context menu commands see [this](./first-command.md)  
If you don't know what context menu commands are, I'll tell you. You can only have 5 of these commands for user and 5 for message. There are no arguments, just discord will return a message/user.

## Context Message

```js
const { Command, CommandType } = require('gcommands');

new Command({
	name: 'parse',
	description: 'Parse message content',
	type: [CommandType.CONTEXT_MESSAGE],
	run: (ctx) => {
        const message = ctx.arguments.getMessage('message');

		return ctx.reply(`Parsed: ${message.content}`);
	}
});
```

## Context User

```js
const { Command, CommandType } = require('gcommands');

new Command({
	name: 'parse',
	description: 'Parse user id',
	type: [CommandType.CONTEXT_USER],
	run: (ctx) => {
        const user = ctx.arguments.getUser('user');

		return ctx.reply(`Parsed: ${user.id}`);
	}
});
```

Don't forget that GCommands is unique precisely in that you can have, for example, Context Menu Message, Context Menu User, Slash command in a single file in a single function.