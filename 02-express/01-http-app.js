// loading HTML file using normal NODE.JS

const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./02-express/navbar-app/index.html');
const homeStyle = readFileSync('./02-express/navbar-app/styles.css');
const homeLogo = readFileSync('./02-express/navbar-app/logo.svg');
const homeLogic = readFileSync('./02-express/navbar-app/browser-app.js');

http
    .createServer((req, res) => {
        console.log(req.url);
        if (req.url === '/') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage);
        }
        if (req.url === '/styles.css') {
            console.log('hi')
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