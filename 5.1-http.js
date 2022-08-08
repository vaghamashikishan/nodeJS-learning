// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Welcome to my webpage...');
//     res.end();
// })

// server.listen(5000);

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Welcome to my webpage...');
    } else if (req.url == '/about') {
        res.write('Welcome to about webpage...');
    } else if (req.url == '/history') {
        res.write('Welcome to history webpage...');
    } else {
        res.write(`
        <h1>Oops..Wrong Page</h1>
        <p>Please check address again</p>
        <a href="/">Home Page</a>
        `);
    }
    res.end();
});
console.log('hi');
server.listen(5000);