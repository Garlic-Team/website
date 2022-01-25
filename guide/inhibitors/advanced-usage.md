# Advanced Usage

For example, when you have an inhibitor `MemberRoles`, `UserOnly`, `ClientRoles` it has to define `ids` which can be a problem.  
If you wanted to make a command just for server boosters, you would have to put a condition in the command or create a custom inhibitor. We come up with a simpler solution.

::: danger
Available only in `>=9.0.2`
:::

If you want to dynamically retrieve ids, you can use the `getIds` function.  
In this function you return an array with role ids.

```js
const { Command, Inhibitor: { MemberRoles } } = require('gcommands');

new Command({
    inhibitors: [
        new MemberRoles({
            getIds: (ctx) => {
                return [ ctx.guild.roles.premiumSubscriberRole ]
            }
        })
    ]
})
```