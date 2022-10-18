const express = require('express')
const app = express()
const port = 5000
const { people } = require('./data');

app.use(express.static('./02-express/methods-public'))
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.json(people)
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Hello ${name}`)
    }
    res.status(401).send(`Please provide name`)
})

app.get('/api/people', (req, res) => {
    if (people) {
        return res.status(200).json({ data: people });
    }
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Hello ${name}`)
    }
    res.status(401).send(`Please provide name`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))