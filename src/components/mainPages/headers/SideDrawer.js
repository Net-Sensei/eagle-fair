import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./SideDrawer.css";
import Logo  from "./icon/logo.png";

const SideDrawer = ({show, click}) => {
  
    const sideDrawerClass = ["sidedrawer"];

    if(show){
        sideDrawerClass.push("show")
    }

    return (
        <div className={ sideDrawerClass.join(" ") }>
            {/* <!-- mobile menu --> */}
            <div className="sideDrawer__header">
                <Link to="/" className="d-flex align-items-center">
                    <img src={Logo} alt="sidedrawer-logo" className="drawerLogo" />
                    <h5 className="font-dosis">EAGLEFAIR MANAGEMENT LTD</h5>
                </Link>
                <span onClick={click} class="material-icons nav-menus-wrapper-close-button">close</span>
            </div>


            <ul className="navbar-nav nav-menu responsive_menu d-lg-none">
               <NavLinks/>
            </ul>
        </div>
    )
}

export default SideDrawer
