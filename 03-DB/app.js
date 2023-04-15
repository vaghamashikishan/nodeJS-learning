const express = require("express");
const app = express();
const port = 5000;
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require("mongodb");

let db;
connectToDb((err) => {
    if (!err) {
        app.listen(port, () => console.log(`Our server is connected to ${port}!!!`));
        db = getDb();
    }
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home");
})

app.get('/persons', (req, res) => {
    let personDetails = [];
    db.collection('testCollection')
        .find()
        .sort({ name: -1 })
        .forEach(person => personDetails.push(person))
        .then(() => {
            res.status(200).json(personDetails);
        })
        .catch(err => res.status(401).json({ msg: "There is some unknown error." }))
})

app.get('/persons/:id', (req, res) => {
    db.collection('testCollection')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => console.log(err));
})

app.post('/persons', (req, res) => {
    const person = req.body;

    db.collection('testCollection')
        .insertOne(person)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => console.log(err))
})

app.delete('/persons/:id', (req, res) => {
    const id = req.params.id;
    db.collection('testCollection')
        .deleteOne({ _id: new ObjectId(id) })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
})

app.put('/persons/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    db.collection('testCollection')
        .updateOne({ _id: new ObjectId(id) }, { $set: data })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
})