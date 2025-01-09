import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductPrice() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading status
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages
    const pageSize = 6; // Number of items per page

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const totalProducts = response.data.length;
                // 36 

                // Paginate the products

                //  s= 1-1*6 =0
                //  s1 = 2-1*6=6
                //  s2= 3-1*6=12
                //  s3= 4-1=6=18
                //  s4= 5-1*6=24;
                //  s5= 6-1*6=30
                //  s6= 7-1*6=36;
                const startIndex = (currentPage - 1) * pageSize;
                const endIndex = startIndex + pageSize;

                setProducts(response.data.slice(startIndex, endIndex));
                // 36/6 
                setTotalPages(Math.ceil(totalProducts / pageSize));  
              
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage]); // Re-fetch products when `currentPage` changes

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (loading) {
        // Show spinner while loading
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Render the product list and pagination
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
                                <button className="btn btn-primary mx-3">Add to Cart</button>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-sm btn-outline-primary mx-1"
                    onClick={handlePrev}
                    // disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span className="btn btn-sm btn-light mx-1">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    className="btn btn-sm btn-outline-primary mx-1"
                    onClick={handleNext}
                    // disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductPrice;
