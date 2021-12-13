# Creating your first command

Remember the path we set when creating the client? Navigate to your `commands` folder, or create it. In that folder
create a new JS file. You will create your first command there, exited?

:::: code-group
::: code-group-item new

```js
const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello'
new Command('hello', {
	description: 'Says hello!',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: (ctx) => {
		return ctx.reply(`Hello ${ctx.username}!`);
	}
});
```

:::
::: code-group-item class

```js
const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello-class'
new class extends Command {
	constructor() {
		super('hello-class', {
			description: 'Says hello!',
			// GCommands Next offers different types of commands, we will only use slash and message commands here.
			type: [CommandType.SLASH, CommandType.MESSAGE],
		});
	}

	// The function thats executed when the user uses the command.
	run(ctx) {
		return ctx.reply(`Hello ${ctx.username}!`);
	}
}
```

:::
::::

:::tip 
Creating commands with new was introduced in GCommands Next with the main purpose of making your code look more
clean! You can use the method your prefer.
:::

