
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="row1">
                <img src="/images/logo.png" alt="Logo" width="50px" />
                <div>Skeek</div>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;