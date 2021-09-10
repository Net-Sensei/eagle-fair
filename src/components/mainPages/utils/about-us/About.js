import React from 'react'
import AboutPic from "./dist/banner/about.jpg"
import southIsland from "./dist/img/south-island.jpg"
import central from "./dist/img/central.jpg"
import garden from "./dist/img/garden.jpg"
import carpark from "./dist/img/carpark.jpg"
import hopewell from "./dist/img/hopewell.jpg"
import cuhk from "./dist/img/cuhk.jpg"
import Clients from "./../../clients/Clients"
import "./About.css"

const About = () => {
    return (
        <div className="about bg-white">
            {/* About Header */}
            <div className="row about__header mb-5">
                {/* Heading */}
                <div className="about__title d-flex justify-content-center">
                    <h2 className="text-white font-dosis font-50 border-bottom">About Us</h2>
                </div>
            </div>

            {/* About Info */}
            <div className="container">
                {/* About Here */}
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutPic} className="w-100" alt="" />
                        <p className="font-allura font-50">From CEO Anthony Tang</p>
                    </div>
                    <div className="col-md-6">
                        <div className="card aboutCard bg-white p-5 border-0 mb-5">
                            <h2 className="card-title font-dosis font-50 border-bottom mb-5">Eaglefair management Ltd</h2>
                            <p className="card-text">
                                Eaglefair Management Ltd were establish in year 2000 the founder 
                                Mr. Tango Tang former British army officer he utilize his tactical training
                                skill from the army to guide this Security company for more than a decade.
                                In early year Eaglefair focus on Guarding service, after numbers of project
                                Eaglefair quickly adapt customer demand where service include fire hazard ,
                                water leak procedure , disposal of confidential documents and hygiene evaluation.
                                Our team now service for Hong Kong businesses in multi sector Government contract ,
                                Residential building ,Commercial building and Construction site. Why customer satisfy 
                                with our work, that because we constantly promote our service restlessly. We believe in the coming
                                future our security services will be more relying on technology more than ever. therefore we spend
                                resource on new equipment and R&D on security products that will gain service upgrade for customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Gallery */}
            <div className="container-fluid p-5 portfolio-about border-bottom-white">
                {/* Portfolio Accordion */}
                <div className="row">
                    <h1 className="font-dosis font-50 text-white border-bottom mb-4">PORTFOLIO GALLERY</h1>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed font-dosis font-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                South island line east rail
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Project 2013 to 2018</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={southIsland} className="w-100 d-block" alt="" />
                                        </div>
                                        <div className="card-footer">
                                            <p className="card-text">
                                                The South Island Line is a medium-capacity railway covering approximately 7km from Admiralty Station to South Horizons in Ap Lei Chau.  the construction of the two elevated stations in Ocean Park and Wong Chuk Hang, which involved a viaduct appropriately 2,100m long and the Aberdeen Channel Bridge with a main span of 115m. Two underground stations at Lei Tung and South Horizons which involved 1,100m of tunnels and related plant and ventilation buildings.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed font-dosis font-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Central Reclamation Phase III
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Project 2008 to 2013</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={central} className="w-100 d-block" alt="" />
                                        </div>
                                        <div className="card-footer">
                                            <p className="card-text">
                                                This massive and complex marine and civil infrastructure project was an integral part of a high-profile project to reclaim almost 18 hectares of land from Hong Kong’s harbour and allow for the future strategic development of the Central waterfront.
                                                The project involved the dredging of 900,000m3 of material and the construction of over 1 km of vertical wave-absorbing seawalls, ferry piers, a railway overrun tunnel, a dual three-lane road tunnel, a heliport, precast cooling water pumping stations and pipelines as well as drainage and other works. Sedimentation pits lined both sides of the site to prevent polluted water from entering the harbour just 20 metres away while trucks drove through wheel washers before entering the city.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed font-dosis font-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Columbarium and Garden of Remembrance
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Project Year 2017 to 2020</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={garden} className="w-100 d-block" alt="" />
                                        </div>
                                        <div className="card-footer">
                                            <p className="card-text">
                                                The scope of works includes construction of an eighty-storey columbarium building to provide 160,000 niches including offices, storerooms, 30 joss paper burners and a 4,800 square metre Garden of Remembrance and associated landscape and ancillary facilities.Design and construction of piled foundation system together with pile caps and strap beams to the building. It also includes construction of a two-way two-lane standard access road including a 30 metre long link bridge from Nim Wan Road to the Columbarium.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed font-dosis font-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Hopewell Center phase II
                            </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Project year 2015 to 2020</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={hopewell} className="w-100 d-block" alt="" />
                                        </div>
                                        <div className="card-footer">
                                            <p className="card-text">
                                                Hopewell Centre II, connected and situated adjacent to Hopewell Centre, is currently planned to be developed into a conference hotel with approximately 1,024 guest rooms. Site formation and foundation works are in progress and target to complete in 2019. Construction of the hotel is targeted to complete by the end of 2021. The completion of the project will further boost the development of Wan Chai and enhance the environment of the surrounding area.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed font-dosis font-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                Hong Kong International Car park 4
                            </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Project 2017 to 2020</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={carpark} className="w-100 d-block" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed font-dosis font-20" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                CUHK Medical Centre
                            </button>
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Project 2016 to 2020</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src={cuhk} className="w-100 d-block" alt="" />
                                        </div>
                                        <div className="card-footer">
                                            <p className="card-text">
                                                CUHK Medical Centre is a private hospital under construction in Ma Liu Shui, Hong Kong. The 500-bed hospital will be managed and with clinical services provided by Faculty of Medicine, The Chinese University of Hong Kong. The hospital is expected to start operating in 2020.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients */}
            <Clients/>
        </div>
    )
}

export default About
