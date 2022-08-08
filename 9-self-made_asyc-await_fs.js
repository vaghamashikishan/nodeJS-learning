const { readFile } = require('fs');

function getPath(path) {
    return Promise = new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

async function doTask() {
    try {
        const one = await getPath('./folder/first.txt');
        console.log(one);

    } catch (error) {
        console.log(error);
    }
}

doTask();