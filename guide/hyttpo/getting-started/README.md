# Getting started

## Installing dependencies

Before continuing make sure you have [NodeJS](https://nodejs.org/) v16.6 or higher installed on your machine. You can
verify your installation with `node -v` in your terminal.

:::: code-group
::: code-group-item npm

```sh:no-line-numbers
npm install hyttpo@latest
```

:::
::: code-group-item yarn

```sh:no-line-numbers
yarn add hyttpo@latest
```

:::
::: code-group-item pnpm

```sh:no-line-numbers
pnpm add hyttpo@latest
```

:::
::::

## Basic setup

Let's start by importing hyttpo into our project.

:::: code-group

::: code-group-item CJS
```js
const hyttpo = require('hyttpo').default;
```
:::

::: code-group-item ESM
```js
import { hyttpo } from 'hyttpo';
```
:::

::::

That's it! Try running `node index.js` in your terminal!