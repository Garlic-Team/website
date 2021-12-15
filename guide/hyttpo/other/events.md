# Events

Hyttpo emits events as well as the normal built-in [http](https://nodejs.org/api/http.html) library, so you can, for example, create a progress bar for downloading.

::: danger
You can use [await](./async.md), but you have to use events in config.
:::

### All events (EventEmitter):
- data (only node.js)
- error
- end
- response (only node.js)
- downloadProgress (only browser)
- uploadProgress (only browser)

### All events (In PayloadRequest):
- onData (only node.js)
- onError
- onEnd
- onResponse (only node.js)
- onDownloadProgress (only browser)
- onUploadProgress (only browser)

## Example code (EventEmitter)

```js
const hyttpo = require('hyttpo').default;

hyttpo.request({
    method: 'GET',
    url: 'url'
})
    .catch(e => e)
    .on('data', console.log)
    .on('error', console.log)
    .on('end', () => console.log('Done!'))
    .then(res => {
        console.log(res.data)
    })
```

## Example code (In PayloadRequest)

```js
const hyttpo = require('hyttpo').default;

(async() => {
    const res = await hyttpo.request({
        method: 'GET',
        url: 'url',
        onData: (d) => console.log(d),
        onError: (e) => console.log(e),
        onEnd: () => console.log('end')
    }).catch(e => e)

    console.log(res)
})();
```

::::