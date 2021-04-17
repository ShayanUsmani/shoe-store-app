import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import Error from './components/404';
import NavBar from './components/Navbar';

function RouteConfig() {

    return (
        <Router>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductItem />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>   
    );
}

export default RouteConfig;