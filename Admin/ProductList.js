import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ onEdit, onDelete }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(`true`); // State to track loading status

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error('Error fetching products:', error);

            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        // Show the spinner while loading
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Render the product list after loading
    return (
        <div className="container-fluid">
            <div className="row">
                {products.map((product) => (
                    <div className="col-lg-4" key={product.id}>
                        <div className="card m-5" style={{ width: '18rem' }}>
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt="Product"
                                style={{ width: '100%', height: '200px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{product.title}</h5>
                                <h5 className="card-title">Price: ${product.price}</h5>
                                <p className="card-text text-truncate">{product.description}</p>
                                <button className="btn btn-primary mx-3" onClick={()=>onEdit(product)}>Edit</button>
                                <button className="btn btn-primary" onClick={()=>onDelete(product.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;


