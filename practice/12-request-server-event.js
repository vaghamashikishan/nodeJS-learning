const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.end(`<h1>I am kishan</h1>`);
})

server.listen(4200);