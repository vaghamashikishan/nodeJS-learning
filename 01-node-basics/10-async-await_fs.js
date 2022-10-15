
const { readFile, writeFile } = require('fs').promises;

async function doTask() {
    try {
        const first = await readFile('./folder/first.txt', 'utf-8');
        const second = await readFile('./folder/second.txt', 'utf-8');

        await writeFile('./folder/async-await_fs.txt', `This is awesome: ${first} ${second}`);
        const third = await readFile('./folder/async-await_fs.txt', 'utf-8');
        console.log(first, second);
        console.log(third);
    } catch (error) {
        console.log(error);
    }
}

doTask();