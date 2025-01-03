import React, { useState, useEffect } from 'react';

function AddProduct({ onSubmit, initialData }) {
    const [productData, setProductData] = useState({
        product_name: '',
        price: '',
        qty: '',
        size: '',
        image: '',
        description: '',
        brand_name: '',
    });
    useEffect(() => {
        if (initialData) setProductData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
    };

  return (
    <div>AddProduct


<form onSubmit={handleSubmit}>
            <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                value={productData.product_name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={productData.price}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="qty"
                placeholder="Quantity"
                value={productData.qty}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="size"
                placeholder="Size"
                value={productData.size}
                onChange={handleChange}
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={productData.image}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={productData.description}
                onChange={handleChange}
                required
            ></textarea>
            <input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                value={productData.brand_name}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default AddProduct