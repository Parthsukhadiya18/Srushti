import React, { useState, useEffect } from 'react'
import axios from 'axios';
function ProductList({ onEdit, onDelete }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>ProductList
            <h2>Product List</h2>
            <div class="container-fluid">
                <div class="row">
              
                {products.map((product) => (
  <div class="col-lg-4">
<div className="card" style={{width: '18rem'}} key={product._id}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <h5 className="card-title">Price: ${product.price}</h5>

    <p className="card-text text-truncate">S{product.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

                
            ))}
                </div>
            </div>
           



        </>
    )
}

export default ProductList