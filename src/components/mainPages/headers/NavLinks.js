import React from 'react'
import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
           <li className="nav-item">
                <Link className="nav-link color-primary" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/service-products">Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact</Link>
            </li>  
        </>
    )
}

export default NavLinks
