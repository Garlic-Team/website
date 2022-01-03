# Creating your first inhibitor

GCommands supports creating your own inhibitors to use in commands. You just need to create an `inhibitors` folder to put `OwnerOnly.js` in, for example.

```js
class OwnerOnlyInhbitor {
	constructor(ownerIds = null) {
		this.ownerIds = ownerIds || ['id1', 'id2'];
	}

	run(ctx) {
		return this.ownerIds.some(userId => userId === ctx.user.id);
	}
}

module.exports = OwnerOnlyInhbitor;
```

If you want different users in each command, just use the built-in UserOnlyInhibitor but if you want an inhibitor that already has users defined, you can make your own.

When you have your inhibitor ready, you import it in a command and use `new OwnerOnlyInhbitor()`.

```js
const { Command } = require('gcommands');
const OwnerOnlyInhbitor = require('../inhibitors/OwnerOnlyInhibitor.js')

new Command({
    name: 'inhibitor-test',
    inhibitors: [
        new OwnerOnlyInhbitor()
    ],
    ...other
})
```