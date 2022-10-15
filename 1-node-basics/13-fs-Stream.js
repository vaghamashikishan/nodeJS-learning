const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
const stream = createReadStream('./folder/sub-folder/big-text.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./folder/sub-folder/big-text.txt', { encoding: 'utf8' })
// const stream = createReadStream('./folder/sub-folder/big-text.txt')

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err));
