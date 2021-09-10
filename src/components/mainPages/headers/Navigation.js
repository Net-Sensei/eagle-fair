import React, {useState} from 'react'
import Navbar from "./Navbar"
import SideDrawer from "./SideDrawer"
import Backdrop from "./Backdrop"

const Navigation = () => {
    
    const [sideToggle, setSideToggle] = useState(false)

    // Scroll nav
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("#navigation1");
        const container = document.querySelector(".header-container");
        nav?.classList.toggle("sticky", window.scrollY > 0);
        container?.classList.toggle("unsetPadding", window.scrollY > 0);
    })

    return (
        //////// Navbar ////////
         <nav id="navigation1" className="navigation d-flex">
            <Navbar click={ () => setSideToggle(true)}/>
            <SideDrawer show={ sideToggle } click={ () => setSideToggle(false)}/>
            <Backdrop show={ sideToggle } click={ () => setSideToggle(false)}/>
        </nav>
    )
}

export default Navigation
