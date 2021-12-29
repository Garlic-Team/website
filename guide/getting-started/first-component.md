# Creating your first component

## What is a component?

A component is basically a command, but for message components. This makes it easier to handle buttons/context menus.

## Creating a component

Remember the first command you created? We are going to modify its run function a little, and let it send an awesome button along with the message.

```js
// Create a new action row with a button
const row = new MessageActionRow().addComponents([
	new MessageButton()
		.setCustomId(CustomId('hello', ctx.userId))
		.setLabel('Click me!')
		.setStyle('SUCCESS')
	])

// Reply with the button
return ctx.reply({ content: `Hello ${ctx.username}!`, components: [row] });
```

Make sure to add the import statements for `MessageActionRow`, `MessageButton` and `CustomId` at the top of the file.

```js
const { ...other, MessageActionRow, MessageButton, CustomId} = require('gcommands');

// Other code
```

Great! When you use the command again you should see an awesome new button.

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
		<template #actions>
        	<DiscordButtons>
        		<DiscordButton type="success">Click me!</DiscordButton>
        	</DiscordButtons>
        </template>
	</DiscordMessage>
</DiscordMessages>

Now open or create the `components` folder and create a new file in it.

:::: code-group
::: code-group-item component

```js
const {Component, ComponentType} = require('gcommands');

// Create a new component with the name "hello", this name is the first argument of CustomId: CustomId('hello')
new Component({
	name: 'hello',
	// Set the type of the component
	type: [ComponentType.BUTTON],
	// The function thats called when the button is pressed
	run: (ctx) => {
		return ctx.reply(`Hello again ${ctx.username}!`);
	}
});
```

:::
::: code-group-item class component

```js
const {Component, ComponentType} = require('gcommands');

// Create a new component with the name "hello", this name is the first argument of CustomId: CustomId('hello')
new class extends Component {
	constructor() {
		super({
			name: 'hello',
			// Set the type of the component
			type: [ComponentType.BUTTON],
		});
	}

	// The function thats called when the button is pressed
	run(ctx) {
		return ctx.reply(`Hello again ${ctx.username}!`);
	}
};
```

:::
::::

After clicking on the button you will get a reply like this

<DiscordMessages>
	<DiscordMessage profile="bot">
    	Hello again S222em!
    </DiscordMessage>
</DiscordMessages>


