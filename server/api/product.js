import data from "../../src/assets/Data/t-shirt.js";


export const productCategory = (req, res) => {
    let category = req.params.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);
    const products = data.tshirts.filter((tshirts) => tshirts.category === category);
    res.status(200).send(products)
}

export const topratedProduct = (req, res) => {
    const product = data.tshirts.filter((tshirts) => tshirts.rating > 4);
    res.status(200).send(product);
}

export const getProduct = (req, res) => {
    const products = data.tshirts.find((tshirts) => tshirts.slug === req.params.slug);
    res.status(200).send(products);
}