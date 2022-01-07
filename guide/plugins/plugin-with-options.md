# Creating a plugin with options

If you don't already know what plugins are, and how to create a basic plugin, see the previous two documents.  
If we want a plugin that will also have some settings, we need to make a main file like last time, but with a function.

:::: code-group
::: code-group-item JS
```js
const { Plugin, Logger } = require('gcommands');

const pluginName = 'plugin-with-options';

module.exports = (options) => {
    if (!options.key) return Logger.error('Please define key!', pluginName);

    new Plugin(pluginName, (client) => {
        client.pluginKey = option.key;
    })
}
```
:::
::: code-group-item TS
```js
import { Plugin, Logger } from 'gcommands';

const pluginName = 'plugin-with-options';

// Inject typings for GClient
declare module 'gcommands' {
    interface GClient {
        pluginKey: string;
    }
}

export interface MyOptions {
    key: string;
}

export default (options: MyOptions) => {
    if (!options.key) return Logger.error('Please define key!', pluginName);

    new Plugin(pluginName, (client) => {
        client.pluginKey = option.key;
    })
}
```
::::

In the case of plugins, I prefer typescript because you can more easily have typings as well.