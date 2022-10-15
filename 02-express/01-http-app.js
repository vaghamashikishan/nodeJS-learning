const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./02-express/navbar-app/index.html');

http
    .createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage);
        res.end();
    })
    .listen(5000);