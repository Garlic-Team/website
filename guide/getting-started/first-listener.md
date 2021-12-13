# Creating your first listener

## What is a listener?

A listener listens to events that occur. This could be events from the discord API, or from GCommands.

## Creating a listener

When setting up the client you added `path.join(__dirname, 'listeners')` so go ahead and open or create the listeners folder and create a new file in it.

:::: code-group
::: code-group-item listener

```js
const {Listener} = require('gcommands');

// Create a new listener listening to the "ready" event
new Listener('ready', {
	// Set the name for the listener
	name: 'ready',
	// The function thats called when the event occurs
	run: (client) => {
		return console.log(`Ready! Initialized with ${client.guilds.cache.size} guilds`);
	}
});

```

:::
::: code-group-item class listener

```js
const {Listener} = require('gcommands');

// Create a new listener listening to the "ready" event
new class extends Listener {
	constructor() {
		super('ready', {
			// Set the name for the listener
			name: 'ready'
		});
	}

	// The function thats called when the event occurs
	run(client) {
		return console.log(`Ready! Initialized with ${client.guilds.cache.size} guilds`);
	}
}
```

:::
::::

This listener listens to the `ready` event. The `ready` event gets emitted when your client becomes ready. After restarting your bot you should see this in your console:

```sh:no-line-numbers
Ready! Initialized with 1 guilds
```
