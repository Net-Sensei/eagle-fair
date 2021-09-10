import React  from "react";
import { Link } from "react-router-dom";
import Logo  from "./icon/logo.png";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = ({click}) => {
    

    return (
        <>

            {/* logo */}
            <Link className="navbar-brand text-secondary pl-4 mt-1" style={{marginLeft: '15px'}} to="/">
                <img className="logoHeader" src={Logo} alt="admin-logo" /> 
                EAGLEFAIR MANAGEMENT LTD
            </Link>
            

            {/* links */}
            <div className=" nav-menus-wrapper">
                <ul className="navbar-nav flex-row gap-5 nav-menu float-right">
                   <NavLinks/>
                </ul>
            </div>

             {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <span class="material-icons">
                    menu
                </span>
            </div>
        </>
    )
}

export default Navbar
