const age = 51;

if (age >= 18) {
    console.log('You are allowed to vote...');
} else {
    console.log('You are minor. So, You can not vote...');
}

console.log('------> ' + __dirname);
console.log('------> ' + __filename);

require('./2-demo_export');
const data = require('./2-demo_export');
const { items, obj1, funcMain } = require('./4-demo_exportAll');
console.log('------> ' + data.name);
console.log('------> ' + data.age);

const sayHiFunc = require('./3-demo_function');
// Here the datq object is used from './demo_export' file.
sayHiFunc(data.name);
sayHiFunc(data.age);
sayHiFunc(data);

require('./4-demo_exportAll');
// All these 'items', 'obj1' and 'funcMain()' are imported from above file
console.log(items);
console.log(obj1);
funcMain();