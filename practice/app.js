const { createReadStream } = require('fs');

const stream = createReadStream('./folder/big-file.txt');

stream.on('data', result => console.log(result))