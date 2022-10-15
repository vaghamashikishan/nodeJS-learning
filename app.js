const http = require('http');
http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, 'KISHAN', { 'content-type': 'text/html' });
    res.write(`<h1>Kishan</h1>`);
    res.end();
}).listen(5000);
