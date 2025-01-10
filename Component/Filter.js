import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Filter({ onEdit, onDelete }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // For search filter
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setFilteredProducts(response.data); // Initialize filtered products
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...filteredProducts].sort((a, b) =>
            order === 'asc' ? a.price - b.price : b.price - a.price
        );
        setFilteredProducts(sorted);
    };

    const handlePriceFilter = (range) => {
        setPriceRange(range);
        const filtered = products.filter(
            (product) => product.price >= range[0] && product.price <= range[1]
        );
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page after filtering
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page after searching
    };

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid my-4">
            <h1 className="text-center mb-4">Product Filter</h1>
            <div className="row">
                {/* Left Column: Filters */}
                <div className="col-md-3">
                    <div className="card shadow p-3">
                        <h4>Filters</h4>
                        <div className="mb-3">
                            <label htmlFor="priceRange" className="form-label">Price Range</label>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="1000"
                                step="10"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceFilter([0, Number(e.target.value)])}
                            />
                            <span className="text-center mt-2">Price: $0 - ${priceRange[1]}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sortOrder" className="form-label">Sort By Price</label>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-primary" onClick={() => handleSort('asc')}>
                                    Ascending
                                </button>
                                <button className="btn btn-outline-primary" onClick={() => handleSort('desc')}>
                                    Descending
                                </button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="search" className="form-label">Search</label>
                            <input
                                type="text"
                                className="form-control shadow"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Product Data */}
                <div className="col-md-9">
                    <div className="row">
                        {paginatedProducts.map((product) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt="Product"
                                        style={{ height: '200px', objectFit: 'contain' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{product.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
                                        <p className="card-text text-truncate">{product.description}</p>
                                        <div className="d-flex justify-content-between mt-3">
                                            <button className="btn btn-outline-success">Add to Cart</button>
                                            <button className="btn btn-outline-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <button
                            className="btn btn-outline-secondary me-2"
                            onClick={() => handlePageChange('prev')}
                            // disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {Math.ceil(filteredProducts.length / itemsPerPage)}</span>
                        <button
                            className="btn btn-outline-secondary ms-2"
                            onClick={() => handlePageChange('next')}
                            // disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
