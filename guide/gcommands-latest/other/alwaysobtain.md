# The alwaysObtain option in commands

:::tip
`alwaysObtain` only affects message commands.
:::

The `alwaysObtain` option does a simple thing. Arguments in the first message initiating the command do not count.

This example is to showcase in which cases `alwaysObtain` would be useful:

```js
const { Command, ArgumentType } = require("gcommands");

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: "repeat",
      description: "Repeat this please",
      alwaysObtain: false // Or true
      args: [
        {
          name: 'channel', // This argument is just a example, we will not use it
          description: 'channel',
          type: ArgumentType.CHANNEL,
          required: true,
        },
        {
          name: 'string',
          description: 'A string',
          type: ArgumentType.STRING,
          required: true,
        }
      ]
    });
  }

  run({ respond, objectArgs }) {
    respond(objectArgs.string)
  }
}
```

