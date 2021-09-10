import React from  'react';
import bg from "./dist/img/bg.jpg"
import slogan2 from "./dist/img/slogan2.png"
import "./Header.css"
import Navigation from './Navigation';

const Header = () => {
  
    return (
        <>
         <header className="header_area" id="header">
            <div className="main_header_area">
                <div className="header-container container-fluid px-4">
                    {/* Navbar */}
                    <Navigation/>

                    {/* Overlay */}
                    <div className="main-overlay container font-play">
                        <div className="overlay__left">
                            <img src={slogan2} alt="" />
                        </div>
                        <div className="overlay__right">
                            <img src={bg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
         </header>
        </>
    )
}

export default Header
