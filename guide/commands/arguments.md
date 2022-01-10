# Creating your command with arguments

::: danger
We're only going to show the `new Command` method here, but of course the `class extends` method works as well. [What?](./first-command.md)
:::

## Normal arguments

If you want to add arguments to the command, you have more options. Now, we'll show you how to add simple arguments and different types.  
First, you need to import the `ArgumentType` enum and `Argument` class, which we will be using a lot.

```js
const { MessagEmbed } = require('discord.js');
const { Command, CommandType, Argument, ArgumentType } = require('gcommands');

new Command({
    name: 'userinfo',
    description: 'Check user informations',
    type: [ CommandType.SLASH ],
    arguments: [
        new Argument({
            name: 'user',
            description: 'Select user',
            type: ArgumentType.USER,
            required: true,
        })
    ],
    run: (ctx) => {
        // We will use the getMember method because we want to get a straight GuildMember from the argument.
        // We'll put `user` in this method because that's what our argument is called.
        const member = ctx.arguments.getMember('user');

        const embed = new MessageEmbed()
            .setAuthor({
                name: member.user.tag.toString(),
                iconURL: member.user.displayAvatarURL({ dynamic: true }),
            })
            .addFields([
                {
                    name: 'Username',
                    value: member.user.username.toString(),
                    inline: true,
                },
                {
                    name: 'Discriminator',
                    value: member.user.discriminator.toString(),
                    inline: true,
                },
                {
                    name: 'Nickname',
                    value: member.nickname || 'none',
                    inline: true,
                },
                {
                    name: 'Timeout'
                    value: member.isCommunicationDisabled ? member.communicationDisabledUntil : '❌',
                    inline: true,
                },
                {
                    name: 'Joined At',
                    value: member.joinedAt,
                    inline: true,
                },
                {
                    name: 'Created At',
                    value: member.user.createdAt,
                    inline: true,
                }
            ])
            .setColor(member.displayHexColor)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

        ctx.reply({
            content: `Informations about ${member.toString()}`,
            embeds: [ embed ],
        })
    }
})
```

::: tip
You don't have to use the `Argument` class, but you can write the arguments directly into the `arguments` object.
:::

## Sub Commands

What is it? What is it for? Why is it? You may have a lot of questions, but we'll explain it to you right away.  
Sub commands are for when you want to have a sub command. For example, `/money give <name>`.  
It doesn't pay to do a `/moneygive` command when the limit of commands for interaction is 100 so far, and it doesn't look pretty either.  

Again, it's very simple, as in the first example.

```js
const { Command, CommandType, AutoDeferType, Argument, ArgumentType } = require('gcommands');

new Command({
    name: 'money',
    description: 'Give/remove/check money',
    type: [ CommandType.SLASH ],
    autoDefer: AutoDeferType.NORMAL,
    arguments: [
        new Argument({
            name: 'add',
            description: 'Add money for user',
            type: ArgumentType.SUB_COMMAND,
            options: [
                new Argument({
                    name: 'user',
                    description: 'Select user',
                    type: ArgumentType.USER,
                    required: true,
                })
            ]
        }),
        new Argument({
            name: 'remove',
            description: 'Remove money from user',
            type: ArgumentType.SUB_COMMAND,
            options: [
                new Argument({
                    name: 'user',
                    description: 'Select user',
                    type: ArgumentType.USER,
                    required: true,
                })
            ]
        }),
        new Argument({
            name: 'check',
            description: 'Check user balance',
            type: ArgumentType.SUB_COMMAND,
            options: [
                new Argument({
                    name: 'user',
                    description: 'Select user',
                    type: ArgumentType.USER,
                    required: false,
                })
            ]
        })
    ],
    run: (ctx) => {
        // Now let's detect what sub command was used.
        const sub = ctx.getSubcommand();

        if (sub === 'add') {
            // add code
        } else if (sub === 'remove') {
            // remove code
        } else  {
            const user = ctx.getMember(user);

            // Why safeReply? We have `autoDefer` in the command, if by chance there is a problem with the database, so that the command doesn't fail and the discord doesn't throw "Interaction failed".
            // This will allow your command to last a bit longer, and then the reply will automatically modify itself. So `safeReply` is a function of `reply` and `editReply`.
            ctx.safeReply({
                content: `${user ? `${user.toString()}'s` : `Your`} balance is 0€.`,
                ephemeral: true
            })
        }
    }
})
```

::: tip
If you want advice on the database, use [prisma](../databases/prisma.md)
:::

## Sub Command Group

What is a Sub Command Group? After all, we have Sub Command, so why Sub Command Group? This is a very useful type to make your life easier.  
If you want to have a command such as `/role mass add <role>` then you are in the right place.  

```js
const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const ms = require('ms');

new Command({
    name: 'role',
    description: 'Add/remove role',
    type: [ CommandType.SLASH ],
    arguments: [
        new Argument({
            name: 'mass',
            description: 'Role for everyone',
            type: ArgumentType.SUB_COMMAND_GROUP,
            options: [
                new Argument({
                    name: 'add',
                    description: 'Add role (everyone)',
                    type: ArgumentType.SUB_COMMAND,
                    options: [
                        new Argument({
                            name: 'role',
                            description: 'Select role',
                            type: ArgumentType.ROLE,
                            required: true,
                        })
                    ]
                }),
                new Argument({
                    name: 'remove',
                    description: 'Remove role (everyone)',
                    type: ArgumentType.SUB_COMMAND,
                    options: [
                        new Argument({
                            name: 'role',
                            description: 'Select role',
                            type: ArgumentType.ROLE,
                            required: true,
                        })
                    ]
                })
            ]
        }),
        new Argument({
            name: 'add',
            description: 'Add role for user',
            type: ArgumentType.SUB_COMMAND,
            options: [
                new Argument({
                    name: 'role',
                    description: 'Select role',
                    type: ArgumentType.ROLE,
                    required: true,
                }),
                new Argument({
                    name: 'user',
                    description: 'Select user',
                    type: ArgumentType.USER,
                    required: true,
                })
            ]
        }),
        new Argument({
            name: 'remove',
            description: 'Remove role from user',
            type: ArgumentType.SUB_COMMAND,
            options: [
                new Argument({
                    name: 'role',
                    description: 'Select role',
                    type: ArgumentType.ROLE,
                    required: true,
                }),
                new Argument({
                    name: 'user',
                    description: 'Select user',
                    type: ArgumentType.USER,
                    required: true,
                })
            ]
        })
    ],
    run: async(ctx) => {
        // Now let's detect what sub command group was used.
        const subgroup = ctx.getSubcommandGroup();
        const sub = ctx.getSubcommand();

        const role = ctx.getRole('role');

        if (subgroup === 'mass') {
            

            if (sub === 'add') {
                // Add role (everyone)
                let members = (await ctx.guild.members.fetch());
                members = [...members.values()];
                members = members.filter(m => !m.roles.cache.has(role.id));

                members.forEach((member) => {
                    member.roles.add(role);
                })

                ctx.reply({
                    content: `ETA: ${ms(members.length * 1000)}`
                })
            } else {
                // Remove role (everyone)
                let members = (await ctx.guild.members.fetch());
                members = [...members.values()];
                members = members.filter(m => m.roles.cache.has(role.id));

                members.forEach((member) => {
                    member.roles.remove(role);
                })

                ctx.reply({
                    content: `ETA: ${ms(members.length * 1000)}`
                })
            }
        } else {
            const member = ctx.getMember('user');

            if (sub === 'add') {
                // Add role to user
                member.roles.add(role)
                    .then(() => {
                        ctx.reply({
                            content: 'Added!',
                            ephemeral: true,
                        })
                    })
                    .catch(e => {
                        ctx.reply({
                            content: e,
                            ephemeral: true,
                        })
                    });
            } else {
                // Remove role from user
                if (member.roles.cache.has(role.id)) {
                    ctx.reply({
                        content: 'You have this role!',
                        ephemeral: true,
                    })
                    return;
                }

                member.roles.remove(role)
                    .then(() => {
                        ctx.reply({
                            content: 'Removed!',
                            ephemeral: true,
                        })
                    })
                    .catch(e => {
                        ctx.reply({
                            content: e,
                            ephemeral: true,
                        })
                    });
            }
        }
    }
})
```

## Autocomplete

What is this? Surely you know that with an argument of type `STRING` there is an option to add `choices`.  
Autocomplete is the same as choices, but with the added benefit of being dynamic.

```js
const { Command, CommandType, Argument, ArgumentType } = require('gcommands');

new Command({
    name: 'autocomplete',
    description: 'The autocomplete command',
    type: [ CommandType.SLASH ],
    arguments: [
        new Argument('string', {
            description: 'String input',
            type: ArgumentType.STRING,
            run: (ctx) => { // dynamic choices, autocomplete
                const guild = ctx.guild;

                ctx.respond([
                    {
                        name: 'Red',
                        value: 'red',
                    },
                    {
                        name: `Your guild id: ${guild.id}`,
                        value: guild.id
                    }
                ]);
            }
        })
    ],
    run: async (ctx) => {
        await ctx.reply({content: ctx.arguments.getString('string')});
    }
});
```