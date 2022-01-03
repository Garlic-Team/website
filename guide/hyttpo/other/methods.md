# Methods

With hyttpo you don't have to send only `GET` request, but also others.

All supported methods:
- GET
- POST
- PATCH
- PUT
- TRACE
- HEAD
- OPTIONS
- CONNECT
- DELETE
- SEARCH

## Example code

:::: code-group

::: code-group-item GET
```js
const hyttpo = require('hyttpo').default;

hyttpo.request({
    method: 'GET',
    url: 'https://api.ipify.org/?format=json'
})
    .catch(e => e)
    .then(res => {
        console.log(res.data)
    })
```
:::

::: code-group-item POST
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
    .then(res => {
        console.log(res.data)
    })
```
:::

::::

## Learn

All of these methods serve a purpose, but `GET` and `POST` are quite sufficient to get you started.
You can read more about the methods [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)