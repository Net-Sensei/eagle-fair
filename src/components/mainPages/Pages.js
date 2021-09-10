import React from 'react'
import { Switch, Route, useLocation } from "react-router-dom"
import Home from "./index/Home"
import ServicesPage from "./utils/services/ServicesPage"
import Navigation from "./headers/Navigation"
import Products from './utils/products/Products'
import About from './utils/about-us/About'
import Contact from './utils/contact-us/Contact'
import NotFound from './utils/NotFound/NotFound'
import PrivacyPolicy from './utils/privacy-policy/PrivacyPolicy'
import TermsConditions from './utils/Terms&Conditions/TermsConditions'

const Pages = () => {
    const {pathname} = useLocation();

    return (
        <>
        {  pathname !== "/" && <Navigation/> }
        <Switch>
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route path="/terms-conditions" exact component={TermsConditions} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/about-us" exact component={About} />
            <Route path="/products" exact component={Products} />
            <Route path="/service-products" exact component={ServicesPage} />
            <Route path="/" exact component={Home} />
            {/* Page Not Found */}
            <Route path="*" exact component={NotFound} />
        </Switch>
        </>
    )
}

export default Pages
