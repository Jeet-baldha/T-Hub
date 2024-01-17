import express from 'express';
import bodyParser from 'body-parser';
import data from '../src/assets/Data/t-shirt.js'
import cors from 'cors'

const app = express();
app.use(cors());
const PORT = 3000;



app.get('/', (req, res) => {
    res.send('welcome');
})

app.get('/product/toprated', (req, res) => {
    const products = data.tshirts.filter((tshirts) => tshirts.rating >= 4);
    res.send(products)
})

app.get('/:category/products', (req, res) => {
    let category = req.params.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);
    const products = data.tshirts.filter((tshirts) => tshirts.category === category);
    res.send(products)
})


app.get('/product/:slug', (req, res) => {
    const products = data.tshirts.find((tshirts) => tshirts.slug === req.params.slug);

    res.send(products);
})

app.listen(PORT, () => {

    console.log('server listening on port: ' + PORT);

})