# Events

Hyttpo emits events as well as the normal built-in [http](https://nodejs.org/api/http.html) library, so you can, for example, create a progress bar for downloading.

::: danger
You can't use [await](./async.md), because then it will return a straight value, and the EventEmitter won't work.
:::

All events:
- data
- error
- end

## Example code

:::: code-group

::: code-group-item CJS
```js
const hyttpo = require('hyttpo').default;

hyttpo.request({
    method: 'POST',
    url: 'url',
    body: JSON.stringify({
        data: 'omg'
    })
})
    .catch(e => e)
    .on('data', console.log)
    .on('error', console.log)
    .on('end', () => console.log('Done!'))
    .then(res => {
        console.log(res.data)
    })
```
:::

::: code-group-item ESM
```js
import { hyttpo } from 'hyttpo';

(async() => {
    const res = await hyttpo.request({
        method: 'GET',
        url: 'https://api.ipify.org/?format=json'
    }).catch(e => e)

    console.log(res);
})();
```
:::

::: code-group-item TS
```ts
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