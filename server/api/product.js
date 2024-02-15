import data from "../../src/assets/Data/t-shirt.js";
import { product } from "./database.js";


export const productCategory =async (req, res) => {
    let category = req.params.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);
    try {
        const products = await product.find({category:category});

        if (!products || products.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }

        // Map over each product to transform the data
        const transformedProducts = products.map((p) => {
            const { frontImage, backImage, ...productData } = p._doc;

            return {
                ...productData,
                frontImage: {
                    contentType: frontImage.contentType,
                    data: frontImage.data.toString('base64'),
                },
                backImage: {
                    contentType: backImage.contentType,
                    data: backImage.data.toString('base64'),
                },
            };
        });
        res.json(transformedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

}

export const topratedProduct = async (req, res) => {
    try {
        const products = await product.find();

        if (!products || products.length === 0) {
            return res.status(404).json({ error: 'No products found' });
        }

        // Map over each product to transform the data
        const transformedProducts = products.map((p) => {
            const { frontImage, backImage, ...productData } = p._doc;

            return {
                ...productData,
                frontImage: {
                    contentType: frontImage.contentType,
                    data: frontImage.data.toString('base64'),
                },
                backImage: {
                    contentType: backImage.contentType,
                    data: backImage.data.toString('base64'),
                },
            };
        });

        // Send the transformed products data
        res.json(transformedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const getProduct =async (req, res) => {
    // const products = data.tshirts.find((tshirts) => tshirts.slug === req.params.slug);
    try {
        const p = await product.findOne({ slug: req.params.slug });

        if (!p) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const { frontImage, backImage, ...productData } = p._doc;

        // Send only the necessary product data along with image information
        res.json({
            ...productData,
            frontImage: {
                contentType: frontImage.contentType,
                data: frontImage.data.toString('base64'),
            },
            backImage: {
                contentType: backImage.contentType,
                data: backImage.data.toString('base64'),
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    // res.status(200).send(products);
}

