import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">    
            <Link to="/" className="menus">Home</Link>
            <Link to="/about-us" className="menus">About Us</Link>
            <Link to="/product" className="menus">Product</Link>
        </div>
    );
}


export default NavBar;
