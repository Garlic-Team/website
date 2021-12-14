# Async

You don't have to use `.then` all the time, but you can use async.

## Example code

:::: code-group

::: code-group-item CJS (GET)
```js
const hyttpo = require('hyttpo').default;

(async() => {
    const res = await hyttpo.request({
        method: 'GET',
        url: 'https://api.ipify.org/?format=json'
    }).catch(e => e)

    console.log(res);
})();
```
:::

::: code-group-item ESM (GET)
```js
import hyttpo from 'hyttpo';

(async() => {
    const res = await hyttpo.request({
        method: 'GET',
        url: 'https://api.ipify.org/?format=json'
    }).catch(e => e)

    console.log(res);
})();
```
:::

::::

## Learn

You can read more about async [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)