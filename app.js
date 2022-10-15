const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        // const data = fs.readFileSync('./folder/sub-folder/big-text.txt', 'utf-8');
        // res.end(data);

        const readStream = fs.createReadStream('./folder/sub-folder/big-text.txt', 'utf-8');
        readStream.on('open', () => {
            readStream.pipe(res);
        });
        readStream.on('close', (err) => { });
    })
    .listen(4200);