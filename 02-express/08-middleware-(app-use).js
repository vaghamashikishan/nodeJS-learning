const express = require('express')
const app = express()
const port = 5000
const authorize = require('./authorize');

// We can export it in other file too.
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
}

app.use([logger, authorize]);

app.get('/', (req, res) => res.send('Home!'))
app.get('/about', (req, res) => res.send('About!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))