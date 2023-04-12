const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./sub-folder/big-text.txt', `Hello world ${i}\n`, { flag: 'a' })
}