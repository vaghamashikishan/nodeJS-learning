// For this static method we have to put 'index.html' in navbar-app folder too.

const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('./navbar-app'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('./navbar-app/index.html'));
// })

app.all('*', (req, res) => {
    res.send(`<h1>Page not found!</h1>`)
})
app.listen(5000, () => console.log(`Example app listening on port!`));

