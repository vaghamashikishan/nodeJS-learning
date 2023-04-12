const path = require('path');

console.log(`Seperator is " ${path.sep} "`);

const filePath = path.join('folder', 'sub-folder', 'for_path_module.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve('folder', 'sub-folder', 'for_path_module.txt');
console.log(absolute);