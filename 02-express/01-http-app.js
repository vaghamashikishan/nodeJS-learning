// loading HTML file using normal NODE.JS

const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

http
    .createServer((req, res) => {
        console.log(req.url);
        if (req.url === '/') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage);
        }
        if (req.url === '/styles.css') {
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(homeStyle);
        }
        if (req.url === '/logo.svg') {
            res.writeHead(200, { 'content-type': 'image/svg+xml' })
            res.write(homeLogo);
        }
        if (req.url === '/browser-app.js') {
            res.writeHead(200, { 'content-type': 'text/javascript' })
            res.write(homeLogic);
        }

        res.end();
    })
    .listen(5000);