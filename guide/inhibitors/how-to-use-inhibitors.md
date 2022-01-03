# What is inhibitors?

The inhbitor is used to check/execute a function before starting a command. They are terribly useful because at least you don't have to duplicate code in every command.

GCommands already comes with default inhibitors and these are:
- `ChannelOnlyInhibitor`
- `ClientPermissionsInhibitor`
- `ClientRolesInhibitor`
- `NsfwInhibitor`
- `OrInhibitor`
- `UserOnlyInhibitor`
- `UserPermissionsInhibitor`
- `UserRolesInhibitor`

Simply import them in the command, and then add them to the `inhibitors` parameter.

```js
const { Command, ChannelOnlyInhibitor } = require('gcommands');

new Command({
    name: 'inhibitor-test',
    inhibitors: [
        new ChannelOnlyInhibitor([ 'channelId', 'channelId 2' ])
    ],
    ...other
})
```

You may be saying to yourself, what is `OrInhibitor` for. You can put 2 inhibitors in there, for example UserOnly and ChannelOnly and as long as one of those inhibitors is satisfied, the code will continue.

You put something different in each inhibitor. See [documentation](https://garlic-team.js.org/docs/#/docs/gcommands/next/general/welcome) for more information.