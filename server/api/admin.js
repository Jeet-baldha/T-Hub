
import { product } from "./database.js";

export const addProduct =  async (req, res) => {
    try {


        if (!req.files['frontImage'] || !req.files['backImage']) {
            return res.status(400).send('Front and back images are required.');
        }
        const frontImageBuffer = req.files['frontImage'][0].buffer;
        const backImageBuffer = req.files['backImage'][0].buffer;



        const newProduct = new product({
            name: req.body.name,
            price: req.body.price,
            discount: 20,
            slug:req.body.name.replace(/ /g, '-'),
            stock:  req.body.stock,
            category: req.body.category,
            rating:0,
            reviews:[],
            frontImage: {
                data: frontImageBuffer,
                contentType: req.files['frontImage'][0].mimetype,
            },
            backImage: {
                data: backImageBuffer,
                contentType: req.files['backImage'][0].mimetype,
            },
        });

        // Save the product to MongoDB
        await newProduct.save();
        res.send('Product added successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
