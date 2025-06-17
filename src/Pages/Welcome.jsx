import React from 'react';
import { Link } from 'react-router-dom';
import shop from '../Pages/image/shop.jpg';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome container d-flex justify-content-center align-items-center min-vh-100 welcome-container">
            <div className="col-12 col-md-8 col-lg-6 p-4 rounded shadow bg-white text-center">
                <img
                    src={shop}
                    alt="Arbuda Mobile Shop"
                    className="img-fluid rounded mb-3"
                />

                <h1 className="welcome-title">
                    Welcome To <br /> <strong>Arbuda Mobile</strong>
                </h1>

                <p className="welcome-text">
                    Thank You For Visiting <br /> Arbuda Mobile Shop.
                </p>

                <Link to="/login" className="btn btn-primary w-100 mt-3">
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
