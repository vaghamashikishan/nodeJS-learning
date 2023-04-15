const express = require('express');
const app = express();
const port = 5000;
const { products, people } = require('./data');

app.get('/', (req, res) => {
    res.send(`<span>Go to </span><a href="/products">products</a>`)
});

app.get('/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, image, price } = product;
        return { id, name, image, price };
    })
    res.json(newProducts);
})

// Params
app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    const singleProduct = products.find(product => product.id === +req.params.id);
    return singleProduct === undefined ? res.status(404).send(`<h1>Product not found!</h1><a href="/">home page</a>`) : res.json(singleProduct);
})

app.get('/products/:id/reviews/:reviewID', (req, res) => {
    res.send('More complex routing.');
    console.log(req.params.reviewID);
})

// Query
app.get('/products/query', (req, res) => {
    let newPeople = [...people];
    const { search, limit } = req.query;
    console.log(limit);
    if (search) {
        newPeople = newPeople.filter(person => {
            return person.name.includes(search);
        })
    }

    if (limit) {
        newPeople = newPeople.slice(0, Number(limit));
    }

    if (newPeople.length < 1) return res.status(200).send(`No products are matched with your search criteria`);
    res.status(200).json(newPeople);
})

app.get('*', (req, res) => {
    res.send(`<p>Oops...<a href="/">Home page</a></p>`)
})

app.listen(port, () => console.log(`json advance!`))