# Setup

First, you need to add a database parameter to `GCommandsClient` with one of the following options:

```
redis://user:pass@localhost:6379
mongodb://user:pass@localhost:27017/dbname
sqlite://path/to/database.sqlite
postgresql://user:pass@localhost:5432/dbname
mysql://user:pass@localhost:3306/dbname
```

You must replace `user`, `pass` and `dbname` with your parameters.

::: danger
If you have mongodb from their site and the connection uri has `+srv` for mongodb, you must choose an older version `2.2.12` for it to work.
:::

For example, this is what the final database addition will look like:
```js
const KeyvSQLite = require('@keyvhq/sqlite');

new GCommandsClient({
    ...options
    database: ({ store: new KeyvSQlite('sqlite://db/gcommands.sqlite') })
})
```

More info [here](https://keyv.js.org/)