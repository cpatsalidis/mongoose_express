const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');

const Product = require('./models/products');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});