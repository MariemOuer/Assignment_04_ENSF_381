
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const header = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    return(
        <header>
            <div className="header" style={header}>
            <img style={{height: '55px'}} src='/images/logo.png' className='logo' alt="company logo" />
            <h1 style={{fontWeight: 'normal', fontSize: '18px'}}>Skeek</h1>
            </div>
            <nav className="navbar" style={header}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );};

export default Header;

