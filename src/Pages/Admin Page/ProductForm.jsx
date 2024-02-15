import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';


const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        stock: 0,
        discount: 0,
        category: '',
        frontImage: null,
        backImage: null,
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };


    const handleImageChange = (e) => {
        const { name, files } = e.target;
        setProduct((prev) => ({ ...prev, [name]: files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('discount', product.discount);
        formData.append('stock', product.stock);
        formData.append('category', product.category);
        formData.append('frontImage', product.frontImage);
        formData.append('backImage', product.backImage);

        try {

            const response = await fetch('http://localhost:3000/addProduct', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle success, maybe redirect or show a success message
                alert('Form submitted successfully!');
            } else {
                // Handle error, maybe show an error message
                alert('Form submission failed.');
            }
        } catch (error) {
            alert('Error during form submission:', error);
        }
    };



    return (
        <div className='xl:mx-28 bg-white sm:p-10 pt-0 overflow-hidden'>
            <h2>Add a New Product</h2>
            <form className=' flex flex-col w-96 gap-2' onSubmit={handleSubmit} encType='multipart/form-data'>
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
                <label htmlFor="discount">discount:</label>
                <input
                    type="number"
                    id="discount"
                    name="discount"
                    value={product.discount}
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
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />

                <label htmlFor="backImage">Back Image:</label>
                <input
                    type="file"
                    id="backImage"
                    name="backImage"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                    className='w-full px-5 py-2 mt-2 border-zinc-500 outline-none border-1 border rounded-sm'
                />



                <button type="submit" className='w-full p-4 mt-1 hover:bg-zinc-700 text-xl bg-black text-white hover:cursor-pointer'>Add Product</button>
            </form>

            
        </div>
    );
};

export default ProductForm;
