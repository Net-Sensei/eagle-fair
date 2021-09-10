import React from 'react'
import Pic1 from "./dist/clients/pic1.png"
import Pic2 from "./dist/clients/pic2.png"
import Pic3 from "./dist/clients/pic3.png"

import "./Clients.css"

const Services = () => {
    return (
        <div className="clients pt-5 pb-5">
           <div className="clients__header d-flex justify-content-center mb-5">
                <h1 className="font-play border-bottom">Clients</h1>
           </div>
           {/* Services Cards */}
           <div className="container">
                <div className="row gap-5 justify-content-center flex-wrap">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div class="carousel-inner">

                            <div class="carousel-item active">

                                {/* Card */}
                                <div className="row client__cards gap-3 justify-content-center">
                                    <div className="card clientCard border-0">
                                        <div className="card-body p-0 m-0">
                                            <img src={Pic1} class="d-block" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="card clientCard border-0">
                                        <div className="card-body p-0 m-0">
                                            <img src={Pic2} class="d-block" alt="..."/>
                                        </div>
                                    </div>
                                    <div className="card clientCard border-0">
                                        <div className="card-body p-0 m-0">
                                            <img src={Pic3} class="d-block" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">

                                {/* Card */}
                                <div className="row client__cards gap-3 justify-content-center">
                                    <div className="card clientCard border-0">
                                        <div className="card-body p-0 m-0">
                                            <img src={Pic1} class="d-block" alt="..."/>
                                        </div>
                                    </div>

                                    <div className="card clientCard border-0">
                                        <div className="card-body p-0 m-0">
                                            <img src={Pic2} class="d-block" alt="..."/>
                                        </div>
                                    </div>

                                    <div className="card clientCard border-0">
                                        <div className="card-body p-0 m-0">
                                            <img src={Pic3} class="d-block" alt="..."/>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon"></span> */}
                            <span class="material-icons color-primary" aria-hidden="true">
                                arrow_back_ios_new
                            </span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="material-icons color-primary" aria-hidden="true">
                                arrow_forward_ios
                            </span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Services
