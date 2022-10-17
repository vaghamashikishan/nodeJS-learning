const express = require('express');
const app = express();
const port = 5000;
const { products } = require('./data');

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

app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    const singleProduct = products.find(product => product.id === +req.params.id);
    if (!singleProduct) return res.status(404).send(`<h1>Product not found!</h1><a href="/">home page</a>`)
    res.json(singleProduct);
})

app.get('/products/:id/reviews/:reviewID', (req, res) => {
    res.send('More complex routing.');
    console.log(req.params);
})

app.get('*', (req, res) => {
    res.send(`<p>Oops...<a href="/">Home page</a></p>`)
})
app.listen(port, () => console.log(`json advance!`))