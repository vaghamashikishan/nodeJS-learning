const { readFile, writeFile } = require('fs');

writeFile('./folder/first.txt', `I am kishan\n`, { flag: 'a' }, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(res);
})
readFile('./folder/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(res);
})