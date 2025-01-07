import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HeaderFunction from './HeaderFunction';
import Footer from './Footer';



function Product() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch all products from the API on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setFilteredProducts(response.data); // Initially display all products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Handle search input and filter products
    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);

        // Filter products by title based on the query
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery)
        );

        setFilteredProducts(filtered);
    };

    return (
        <>
            <HeaderFunction/>
            {/* <h1>Product Search</h1> */}

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search products"
                value={query}
                onChange={handleSearch}
            />

            {/* Search Results */}
            <div>
                {/* <h2>Results</h2> */}

                {filteredProducts.length > 0 ? (
                    <div className="container-fluid">
                        <div className="row">
                            {filteredProducts.map((product) => (
                                // <li key={product.id}>
                                //     {product.title} - ${product.price}
                                // </li>
                                <div className="col-lg-4" key={product.id}>
                                    <div className="card m-5" style={{ width: '18rem' }}>
                                        <img src={product.image} className="card-img-top" alt="..." style={{ width: '100%', height: '200px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title text-truncate">{product.title}</h5>
                                            <p className="card-text text-truncate">{product.description}</p>
                                            <a href="#" className="btn btn-primary m-2">Add Cart</a>
                                            <a href="#" className="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No products found</p>
                )}


            </div>

            <Footer/>
        </>
    );
}

export default Product;
