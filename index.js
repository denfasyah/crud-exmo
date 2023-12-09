const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
const app = express()

// models
const Product = require('./models/product')

// connect mongodb
mongoose.connect('mongodb://127.0.0.1/ecommerce_db').then((result) => {
    console.log('connected')
}).catch((err) => {
    console.error(err)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index')
});
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index',{products})
});

app.get('/products/:id', async (req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('products/show',{product})
})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})