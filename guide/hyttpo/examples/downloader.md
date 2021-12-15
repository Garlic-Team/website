# Downloader

```js
const hyttpo = require('hyttpo').default;
const progress = require('progress');
const fs = require('fs');

const url = 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg';
const filename = 'image.jpg'
const file = fs.createWriteStream(filename);

hyttpo.request({
    method: 'GET',
    responseType: 'stream',
    url: url
})
    .on('response', (res) => {
        if (res.headers["content-length"] === 'Infinity') {
            console.log(`\x1b[91m[ SORRY ]\x1b[0m I can't install ${filename}. Status: ${res.status}`);
            return;
        }

        progressBar = new progress(`\x1b[91m[ IN PROGRESS ]\x1b[0m Downloading ${filename} |\x1b[36m:bar\x1b[0m| :rate/bps :percent :etas`, {
            complete: "\u2588",
            incomplete: "\u2591",
            total: parseInt(res.headers["content-length"], 10)
        });
    })
    .on('data', (chunk) => {
        progressBar.tick(chunk.length);
    })
    .on('end', () => {
        console.log(`\x1b[92m[ DONE ]\x1b[0m Download finished ${filename}`);
    })
    .then(res => res.data.pipe(file))
    .catch(res => {
        console.log(`\n\x1b[91m[ SORRY ]\x1b[0m I can't install ${filename}. Status: ${res.status}`);
    });
```