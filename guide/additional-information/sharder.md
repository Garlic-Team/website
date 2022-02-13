# Sharding your bot

If you don't know what sharding is, look first at [discord.js guide](https://discordjs.guide/sharding/#when-to-shard)  
If you're using sharding from discord.js, you don't even need to look here. We're going to show you how to use sharding, for example, in a sharder [kurasuta](https://www.npmjs.com/package/kurasuta) that also supports clusters.  

We will create the files `index.js`, `launch.js` and folder `src/`.

```
├── node_modules
    └── ...
├── package.json
├── index.js
├── launch.js
└── src
    └── commands
        └── name.js
    └── index.js
```

In `index.js` we create a sharding manager. Don't forget to set token, shardCount, clusterCount

:::: code-group
::: code-group-item index.js

```js
require('dotenv').config();
const { ShardingManager } = require('kurasuta');
const { Logger } = require('gcommands');
const bot = require('./src/index.js');
const { join } = require('path');

const sharder = new ShardingManager(join(__dirname, 'launch'), {
  client: bot,
  token: process.env.TOKEN,
  shardCount: 'SHARD COUNT for example 2',
  clusterCount: 'CLUSTER COUNT for example 1'
})

sharder.on('shardReady', id => {
  Logger.info(`Kurasuta: Shard ${id} is ready`);
})

sharder.spawn();
```

:::

::: code-group-item .env

```
TOKEN=your discord bot token from discord.dev
```

:::
::::

Once we have `index.js` done, we move to `launch.js` where the cluster will be created.

:::: code-group
::: code-group-item launch.js
```js
const { BaseCluster } = require('kurasuta');
const { Logger } = require('gcommands');

module.exports = class extends BaseCluster{
  launch() {
    Logger.info(`Kurasuta: Launching cluster ${this.id}`);
    this.client.login();
  }
}
```
:::
::::

We already have `launch.js`, so that leaves us with the last one, and that's GClient in `src/index.js`.
:::: code-group
::: code-group-item src/index.js
```js
require('dotenv').config();
const { GClient, Logger } = require('gcommands');
const { join } = require('path');

class YourBot extends GClient{
  constructor(options) {
    super({
      dirs: [
        join(__dirname, 'commands')
      ],
      intents: [ 'GUILDS' ],
      shards: options.shards,
      shardCount: options.shardCount
    })
  }

  login(){
    Logger.info(`Discord: Attempting to login on shards [${this.options.shards.join(', ')}].`);
    super.login(process.env.TOKEN);
  }
}

module.exports = YourBot;
```
:::
::::

Done, now you just need to follow the [basic guide](../commands/first-command.md).  
You can start the bot in the main folder, not in `src` using the `node index.js` command