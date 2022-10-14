const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./folder/sub-folder/big-text.txt', `Hello world ${i}\n`, { flag: 'a' })
}