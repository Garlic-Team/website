# Storing data with prisma

## What is prisma?

Prisma is a database ORM with typescript and nodeJS support. You can read more about prisma [here](https://www.prisma.io/). Prisma provides support for the following databases:
- PostgreSQL
- MySQL
- MariaDB
- SQlite
- AWS Aurora
- Microsoft SQL Server
- Azure SQL
- MongoDB (preview)
- PlanetScale (preview)

## Simple tag sytem

In this guide we are going to create a simple tag system with prisma.

### Installing prisma

:::: code-group
::: code-group-item npm

```sh:no-line-numbers
npm install prisma @prisma/client
```

:::
::: code-group-item yarn

```sh:no-line-numbers
yarn add prisma @prisma/client
```

:::
::: code-group-item pnpm

```sh:no-line-numbers
pnpm add prisma @prisma/client
```

:::
::::

After your package manager finished installing `prisma` and `@prisma/client` you can confirm your installation with `npx prisma`.

### Initiating prisma

Next we need to initialize prisma.

```sh:no-line-numbers
npx prisma init
```

This command will create the `prisma` folder which contains your `schema.prisma` file.

### Connecting to your database

In this guide we are going to use SQlite, because its easy to setup. You can read more about connecting to your database [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres).

:::: code-group
::: code-group-item schema.prisma

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

:::

:::
::::

This will use a file called `dev.db` to store data.

Make sure to add the PrismaClient as your database when initializing the client.

```js
const { PrismaClient } = require("@prisma/client");

const client = new GClient({
    ...options,
    database: new PrismaClient(),
})
```

### Creating the Tag model

Next in your prisma.schema file add the following model at the bottom of the file.

```prisma
model Tag {
  id          Int      @id @default(autoincrement())
  name        String   @unique
  description String
  username    String
  createdAt   DateTime @default(now())
  usage_count Int      @default(0)
}
```

This will create the model Tag.

Push the changes to your database and build the prisma client with:

```sh:no-line-numbers
npx prisma db push
```

### Creating the tag command

For the tag command we will use slash commands.

```js
const { PrismaClient } = require("@prisma/client");
const { Command, CommandType, Argument, ArgumentType, AutoDeferType } = require("gcommands");

new Command({
    name: 'tag',
    description: 'Tags',
    type: [CommandType.SLASH],
    // Automaticly defer the interaction if the response takes to long
    autoDefer: AutoDeferType.NORMAL,
    arguments: [
        new Argument({
            name: 'create',
            description: 'Create a new tag',
            type: ArgumentType.SUB_COMMAND,
            arguments: [
                new Argument({
                    name: 'name',
                    description: 'The name for the tag',
                    type: ArgumentType.STRING,
                    required: true,
                }),
                new Argument({
                    name: 'description',
                    description: 'The description for the tag',
                    type: ArgumentType.STRING,
                    required: true,
                })
            ]
        }),
        new Argument({
            name: 'find',
            description: 'Find a tag',
            type: ArgumentType.SUB_COMMAND,
            arguments: [
                new Argument({
                    name: 'name',
                    description: 'The name of the tag',
                    type: ArgumentType.STRING,
                    required: true,
                }),
            ]
        }),
        new Argument({
            name: 'edit',
            description: 'Edit a tag',
            type: ArgumentType.SUB_COMMAND,
            arguments: [
                new Argument({
                    name: 'name',
                    description: 'The of the tag',
                    type: ArgumentType.STRING,
                    required: true,
                }),
                new Argument({
                    name: 'description',
                    description: 'The description for the tag',
                    type: ArgumentType.STRING,
                    required: true,
                })
            ]
        }),
        new Argument({
            name: 'info',
            description: 'View specific info on a tag',
            type: ArgumentType.SUB_COMMAND,
            arguments: [
                new Argument({
                    name: 'name',
                    description: 'The name of the tag',
                    type: ArgumentType.STRING,
                    required: true,
                }),
            ]
        }),
        new Argument({
            name: 'list',
            description: 'View all tags',
            type: ArgumentType.SUB_COMMAND,
        }),
        new Argument({
            name: 'delete',
            description: 'Delete a tag',
            type: ArgumentType.SUB_COMMAND,
            arguments: [
                new Argument({
                    name: 'name',
                    description: 'The name of the tag',
                    type: ArgumentType.STRING,
                    required: true,
                }),
            ]
        }),
    ],
    run: async (ctx) => {
        // This method is needed to get the correct typings for PrismaClient (typing hints)
        const database = ctx.client.getDatabase(PrismaClient.prototype);
        const sub = ctx.arguments.getSubcommand();

        if (sub === 'create') {
            // Creating a tag
        } else if (sub === 'find') {
            // Finding a tag
        } else if (sub === 'edit') {
            // Editing a tag
        } else if (sub === 'info') {
            // Detailed information on a tag
        } else if (sub === 'list') {
            // Listing all tags
        } else if (sub === 'delete') {
            // Deleting a tag
        }
    }
})
```

#### Creating a tag

```js
const tag = await database.tag.create({
    data: {
        name: ctx.arguments.getString('name'),
        description: ctx.arguments.getString('description'),
        username: ctx.user.tag,
    }
}).catch(error => {
    // Check if the error is a unique constraint error (https://www.prisma.io/docs/reference/api-reference/error-reference)
    if (error.code === 'P2002') return;
    else throw error;
});

// Check if the operation was succesful
if (!tag) return ctx.safeReply('That tag already exists');
else return ctx.safeReply(`Successfully created tag ${tag.name}!`);
```

#### Finding a tag

```js
const tag = await database.tag.findUnique({
    where: {
        name: ctx.arguments.getString('name'),
    },
});

if (!tag) return ctx.safeReply('Could not find that tag');

// Increment the tag usage
await database.tag.update({
    where: { id: tag.id },
    data: {
        usage_count: tag.usage_count + 1,
    },
});

return ctx.safeReply(tag.description);
```

#### Editing a tag

```js
const tag = await database.tag.findUnique({
    where: {
        name: ctx.arguments.getString('name'),
    },
});

if (!tag) return ctx.safeReply('Could not find that tag');

// Edit the tag
await database.tag.update({
    where: { id: tag.id },
    data: {
        description: ctx.arguments.getString('description')
    }
});

return ctx.safeReply(`Edited tag ${tag.name}`);
```

#### Detailed information on a tag

```js
const tag = await database.tag.findUnique({
    where: {
        name: ctx.arguments.getString('name'),
    },
});

if (!tag) return ctx.safeReply('Could not find that tag');
else {
    return ctx.safeReply(`${tag.name} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
}
```

#### Listing all tags

```js
const tags = await database.tag.findMany();

return ctx.safeReply(`List of tags: ${tags.map(tag => tag.name).join(', ') || 'no tags found'}`);
```

#### Deleting a tag

```js
const tag = await findTag();

if (!tag) return ctx.safeReply('Could not find that tag');
else {
    await database.tag.delete({
        where: { id: tag.id }
    });
    
    return ctx.safeReply(`Successfully deleted tag ${tag.name}`);
}
```

