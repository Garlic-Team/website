# Creating your first inhibitor

GCommands supports creating your own inhibitors to use in commands. You just need to create an `inhibitors` folder to put `OwnerOnly.js` in, for example.

:::: code-group
::: code-group-item JS
```js
const { Inhibitor } = require('gcommands');

class OwnerOnlyInhibitor extends Inhibitor.Inhibitor {
	constructor(options) {
		super(options);

		this.ownerIds = options.ids || ['id1', 'id2'];
	}

	run(ctx) {
		if (!this.ownerIds.includes(ctx.userId)) return ctx.reply(this.resolveMessage(ctx) || 'You can not use this command');
		else return true;
	}
}

module.exports = OwnerOnlyInhibitor;
```
:::
::: code-group-item TS
```ts
import type { Snowflake } from 'discord.js';
import { CommandContext, ComponentContext, Inhibitor } from 'gcommands';

export interface OwnerOnlyOptions extends Inhibitor.InhibitorOptions {
	ids: Array<Snowflake>;
}

export class OwnerOnlyInhbitor extends Inhibitor.Inhibitor {
    public readonly ids: Array<Snowflake>;

	constructor(options) {
		super(options);

		this.ids = options.ids || ['id1', 'id2'];
	}

	run(ctx: CommandContext | ComponentContext): boolean | any {
		if (!this.ids.includes(ctx.userId)) return ctx.reply(this.resolveMessage(ctx) || 'You can not use this command');
		else return true;
	}
}
```
:::
::::

If you want different users in each command, just use the built-in UserOnlyInhibitor but if you want an inhibitor that already has users defined, you can make your own.

When you have your inhibitor ready, you import it in a command and use `new OwnerOnlyInhbitor()`.

:::: code-group
::: code-group-item JS
```js
const { Command } = require('gcommands');
const OwnerOnlyInhbitor = require('../inhibitors/OwnerOnlyInhibitor.js');

new Command({
    name: 'inhibitor-test',
    inhibitors: [
        new OwnerOnlyInhbitor()
    ],
    ...other
})
```
:::
::: code-group-item TS
```ts
import { Command } from 'gcommands';
import OwnerOnlyInhbitor from '../inhibitors/OwnerOnlyInhibitor.js';

new Command({
    name: 'inhibitor-test',
    inhibitors: [
        new OwnerOnlyInhbitor()
    ],
    ...other
})
```
:::
::::