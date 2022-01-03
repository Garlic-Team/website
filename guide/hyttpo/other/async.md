# Async

You don't have to use `.then` all the time, but you can use async.

## Example code

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

## Learn

You can read more about async [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)