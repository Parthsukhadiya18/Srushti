import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductPrice = () => {
  const [products, setProducts] = useState([]); // All products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filter products
  const [minPrice, setMinPrice] = useState(0); // Min price 
  const [maxPrice, setMaxPrice] = useState(1000); // Max price
  const [maxProductPrice, setMaxProductPrice] = useState(0); // Actual max price from products

  // Fetch products from the FakeStoreAPI
  useEffect(() => {
    // asynce  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
      //  all data desplay 
        setProducts(response.data);
        setFilteredProducts(response.data);

        // Calcult max price 
        const maxPriceValue = Math.max(...response.data.map((product) => product.price));
        setMaxProductPrice(maxPriceValue);
        setMaxPrice(maxPriceValue);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter minPrice ,maxPrice

  const filterProducts = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };
  // Recalculate filtered products ,price chang
  useEffect(() => {

    filterProducts();
  }, [minPrice, maxPrice]);



  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* <h1>Product List</h1> */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Min Price: ${minPrice}
            <input
              type="range"
              min="0"
              max={maxProductPrice}
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              style={{ marginLeft: "10px", width: "50%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Max Price: ${maxPrice}
            <input
              type="range"
              min="0"
              max={maxProductPrice}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ marginLeft: "10px", width: "50%" }}
            />
          </label>
        </div>

      </div>
      <div className="container-fluid">
        <div className="row">
          {filteredProducts.map((product) => (
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
    </div>
  );
};

export default ProductPrice