# Sending your first request

Now we will show you how to send a request.

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

Output:
```json
{
    "ip": "xx.xx.xx.xx"
}
```