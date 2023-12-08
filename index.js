const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
const app = express()

// connect mongodb
mongoose.connect('mongodb://127.0.0.1/ecommerce_db').then((result) => {
    console.log('connected')
}).catch((err) => {
    console.error(err)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})