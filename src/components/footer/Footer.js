import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.css"

const Footer = () => {

    return (
        <div className="footer">

            <div className="footer__header">
                <div className="btn-bottomTop">
                    <a href="#bottomToTop" className="btn text-white">
                        <span class="material-icons">
                            expand_less
                        </span>
                    </a>
                </div>
            </div>
            
            <div className="container">
                {/* Footer Middle */}
                <div className="row justify-content-center pb-5">
                    <div className="col-md-4">
                        <div className="card border-0 p-0 footerCard">
                            <div className="card-body footerCardBody">
                                <h2 className="card-title font-dosis">Site Map</h2>

                                <ul class="list-group">
                                    <li class="list-group-item"><Link to="/" className="text-white">Home</Link></li>
                                    <li class="list-group-item"><Link to="/service-products" className="text-white">Services</Link></li>
                                    <li class="list-group-item"><Link to="/products" className="text-white">Products</Link></li>
                                    <li class="list-group-item"><Link to="/about-us" className="text-white">About Us</Link></li>
                                    <li class="list-group-item"><Link to="/contact-us" className="text-white">Contact Us</Link></li>
                                    <li class="list-group-item"><Link to="/privacy-policy" className="text-white">Privacy Policy</Link></li>
                                    <li class="list-group-item"><Link to="/terms-conditions" className="text-white">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 p-0 footerCard">
                            <div className="card-body footerCardBody">
                                    <h2 className="card-title font-dosis">OFFICE HOURS</h2>
                                    <p className="card-text font-play">These are our office hours, feel free to contact us!S</p>

                                    <ul class="list-group list-group-numbered">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Monday-Friday:</div>
                                            </div>
                                            <span class="badge bg-white text-dark rounded-pill">9am to 6pm</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Saturday:</div>
                                            </div>
                                            <span class="badge bg-white text-dark rounded-pill">9am to 5pm</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Sunday:</div>
                                            </div>
                                            <span class="badge bg-white text-dark rounded-pill">closed</span>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">  
                        <div className="card border-0 p-0 footerCard">
                            <div className="card-body footerCardBody">
                                <h2 className="card-title font-dosis">OFFICE ADDRESS</h2>

                                <ul class="list-group">
                                    <li class="list-group-item"><a href="#" className="text-white">Address : Unit-22, 6/F, Thriving Industrial Centre</a></li>
                                    <li class="list-group-item"><a href="#" className="text-white">Nos 26-38 Sha Tsui Rd,</a></li>
                                    <li class="list-group-item"><a href="#" className="text-white">Tsuen Wan, NT</a></li>
                                    <li class="list-group-item"><a href="#" className="text-white">Contact : 2498-3734</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
                {/* Footer Copyright */}
                <div className="row text-center border-top-black pt-3">
                    <p className="font-dosis text-white border-bottom-1 mb-2">Email : support@eaglefair.com - Mob : +852 62297136</p>
                    <p className="font-dosis text-white">&copy; Alrights Reserved To EagleFair-Management Ltd - {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer