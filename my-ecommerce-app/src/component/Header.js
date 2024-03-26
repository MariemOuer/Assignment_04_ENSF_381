import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <img src="../images/logo.png" alt="Company Logo" height="60" width="55" />
                <h1 className="company-name">Company Name</h1>
            </div>
            <nav className="header-nav">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
