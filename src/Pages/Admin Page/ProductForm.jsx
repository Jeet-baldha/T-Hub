import React, { useState } from 'react';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        stock: 0,
        category: '',
        frontImage: null,
        backImage: null,
        rating: 0,
        reviews: [],
        slug: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setProduct({ ...product, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions like sending the data to your backend or updating the state
        console.log('Form submitted:', product);
    };

    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <h2>Add a New Product</h2>
            <form className=' flex flex-col w-96 gap-2' onSubmit={handleSubmit}>
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

                <label htmlFor="stock">Stock:</label>
                <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={product.stock}
                    onChange={handleInputChange}
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={product.category}
                    onChange={handleInputChange}
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

                <label htmlFor="frontImage">Front Image:</label>
                <input
                    type="file"
                    id="frontImage"
                    name="frontImage"
                    onChange={handleFileChange}
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

                <label htmlFor="backImage">Back Image:</label>
                <input
                    type="file"
                    id="backImage"
                    name="backImage"
                    onChange={handleFileChange}
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

            

                <button type="submit"  className='w-full p-4 mt-1 hover:bg-zinc-700 text-xl bg-black text-white hover:cursor-pointer'>Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
