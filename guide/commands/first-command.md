# Creating your first command

Remember the path we set when creating the client? Navigate to your `commands` folder, or create it. In that folder
create a new JS file. You will create your first command there, exited?

GCommands support two ways to create commands. You can use `new Command({ ...settings })` or `new class extends Command`. We'll demonstrate both cases, and we'll discuss the advantages and disadvantages.

:::: code-group
::: code-group-item command

```js
const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello'
new Command({
	name: 'hello',
	description: 'Says hello!',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: (ctx) => {
		return ctx.reply(`Hello ${ctx.user.username}!`);
	}
});
```

:::
::: code-group-item class extends

```js
const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello-class'
new class extends Command {
	constructor() {
		super({
			name: 'hello',
			description: 'Says hello!',
			// GCommands Next offers different types of commands, we will only use slash and message commands here.
			type: [CommandType.SLASH, CommandType.MESSAGE],
		});
	}

	// The function thats executed when the user uses the command.
	run(ctx) {
		return ctx.reply(`Hello ${ctx.user.username}!`);
	}
}
```

:::
::::

The advantage of the new style is that you have straight typings for the `run` function. In the case of the `class` command, you have to add jsdocs at the run function to have auto-complete. The new style is also cleaner, shorter to type.

You insert normal code into the run function as you would with [discord.js](https://discord.js.org), except that you use `ctx` instead of `message` or `interaction`.  
The `ctx` is just a variable that you can rename however you want, or you can import just certain functions using `{ reply, user }` instead of `ctx`.  
You may find that you don't find some parameters like `author`. Don't despair, just use `user` instead of `author`.  

When you want to define a client, you can use `this.client` in case of class, or just use `ctx.client`.

:::tip 
Creating commands with new was introduced in GCommands Next with the main purpose of making your code look more
clean! You can use the method your prefer.
:::

Restart your bot, and you should see the `hello` slash command pop-up in your dev-server. Go ahead and give it a try!

<DiscordMessages>
	<DiscordMessage profile="bot">
		<template #interactions>
			<DiscordInteraction
				profile="user"
				author="GCommands"
				:command="true"
			>hello</DiscordInteraction>
		</template>
		Hello S222em!
	</DiscordMessage>
</DiscordMessages>

You can also use the message command

<DiscordMessages>
	<DiscordMessage profile="user">
		.hello
	</DiscordMessage>
	<DiscordMessage profile="bot">
		Hello S222em!
	</DiscordMessage>
</DiscordMessages>

