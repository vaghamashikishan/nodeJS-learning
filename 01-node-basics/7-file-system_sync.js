const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./folder/first.txt', 'utf-8');
const second = readFileSync('./folder/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./folder/result-sync.txt', `This is the final result : ${first}, ${second}`, { encoding: 'utf-8', flag: 'a' });