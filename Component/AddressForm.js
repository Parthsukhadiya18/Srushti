import React, { useState,useEffect } from 'react';
import HeaderFunction from './HeaderFunction';
import Footer from './Footer';

function AddressForm({ onSubmit}) {
    const [address, setAddress] = useState({
        name: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
    });

  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(address);  // Pass the address data back to the parent component
    };

    return (
        <>
        <HeaderFunction/>
        <div className="container my-5">
           
            <h2 className="text-center mb-4">Shipping Address</h2>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={address.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={address.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={address.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">Street Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="street"
                                name="street"
                                value={address.street}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                value={address.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                value={address.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="zip" className="form-label">Zip Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                name="zip"
                                value={address.zip}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit Address
                        </button>
                    </form>
                </div>
            </div>
        </div>

<Footer/>
        </>
    );
}

export default AddressForm;
