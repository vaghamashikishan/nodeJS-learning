// For this static method we have to put 'index.html' in public folder too.

const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('./02-express/public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })

app.all('*', (req, res) => {
    res.send(`<h1>Page not found!</h1>`)
})
app.listen(5000, () => console.log(`Example app listening on port!`))

