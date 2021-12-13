# Creating your first command

## Creating a new command
Let's start by creating a new file in your commands directory and initializing a new class extending from the `Command` class.

```js
const { Command } = require('gcommands');

module.exports = class extends Command {}

// or
const { Command } = require('gcommands');

class Hello extends Command {}

module.exports = Hello;
```

This creates a new class extending from the `Command` class, and exports it for use.

## Setting the name and description of the command

Next we need to set the `name` and `description` of the command, we can do this by using the `constructor()` and `super()`.
You can also create new `CommandOptions` by using the `CommandOptionsBuilder`, explained [here](./usingbuilders.md).

```javascript
const { Command } = require('gcommands');

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'hello', // Set the name of the command
      description: 'Hello!', // Set the description of the command
    });
  }
}
```

## Responding to the command
Now we need to actualy respond to the user. We can do this by creating the `run()` function in our command.

::: warning
Ephemeral messages only work on slash commands.
:::

```javascript
run({ respond, author }) {
  respond(`Hello **${author.tag}**!`); // Send a response
}
```
s
The `respond` function allows you to send responses with message, slash and context menu commands.  
The respond function works the same way as `TextBasedChannel.send` function but has more options. You can find them [here](https://gcommands.js.org/docs/#/docs/main/dev/typedef/GPayloadOptions)

## Resulting code

```javascript
const { Command } = require('gcommands');

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'hello',
      description: 'Hello!',
    });
  }
  run({ respond, author }) {
    respond(`Hello **${author.tag}**!`);
  }
}
```
