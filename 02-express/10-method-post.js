const express = require("express");
const app = express();
const port = 5000;

const people = require('./routes/people');
const auth = require('./routes/auth');

// static middleware, all static documents is in 'methods-public' folder, and it will be served from there
app.use(express.static("./02-express/methods-public"));
// parse request data in urlelcoded format
app.use(express.urlencoded({ extended: false }));
// parse request data in JSON format
app.use(express.json());

// for express.router
app.use('/api/people', people);
app.use('/login', auth);

app.get("/", (req, res) => {
    res.json(people);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
