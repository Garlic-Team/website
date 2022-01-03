# Creating your first plugin

## What is a plugin?

GCommands Next has started to support plugins. A plugin is an addition to GCommands that will make your job easier. Users can create custom plugins for inhibitors, events and such. GCommands has a couple of official plugins, which can be found [here](https://github.com/Garlic-Team/gcommands-plugins/).

## Creating a plugin

First we need to tell ourselves if we want to do the plugin as an npm package, or some folder just for us. If we want to do the plugin as an npm package then we need to make our package called `gcommands-plugin-{name}`. If we want it purely just a folder then we just need to make a `plugins` folder, into which we put the plugin folder.

You can also do the plugin in TypeScript, but you don't have to. If you do make the plugin in TypeScript, you have to build the plugin before publishing.

Now that we have everything ready, let's create the main `index.js` file for the plugin.  
Then we import `Plugin` from `gcommands`.

```js
const { Plugin, registerDirectory } = require('gcommands');
const path = require('path');

new Plugin('my-first-plugin', () => {
    registerDirectory(path.join(__dirname, 'listeners'));
})
```

We have registered a listeners folder that we will keep in the plugin. Then all you have to do is create listeners in this folder, as already shown [here](../getting-started/first-listener.md)

### Package
```
├── node_modules
    └── gcommands-plugin-my-pluginň
        └── listeners
            └── ready.js
        └── index.js
├── package.json
└── src
    └── index.js
```

### Folder
```
├── node_modules
├── package.json
├── plugins
    └── my-first-plugin
        └── listeners
            └── ready.js
        └── index.js
└── src
    └── index.js
```