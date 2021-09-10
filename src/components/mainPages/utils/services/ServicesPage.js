import React from 'react'
import "./ServicePage.css"
import img1 from "./dist/img/1.jpeg"
import img2 from "./dist/img/2.jpg"
import img3 from "./dist/img/3.jpg"
import img4 from "./dist/img/4.jpg"
import img5 from "./dist/img/5.jpg"
import img6 from "./dist/img/6.jpg"
import ServicesPageCard from './ServicesPageCard'

const ServicesPage = () => {

    return (

        <div className="servicesPage">
            {/* Services Header */}
            <div className="row servicesPage_header mb-5"></div>


            {/* Services */}
             <div className="services__header d-flex justify-content-center mb-5">
               <h2 className="servicePageHeader__title text-white font-play font-50 border-bottom">Services & Products</h2>
           </div>
           {/* Services Cards */}
           <div className="container services__cards">

               <ServicesPageCard 
                img={img1}
                title="Security Guard Service" 
                description="eaglefair management have a long history of providing manned guarding services. Static security guards from  will monitor and protect your company premises, building and offices, personnel and assets around the clock. We aim to provide the best service tailored to our client’s individual security and budgetary requirements. In addition to regular site security guard service, we also provide ad hoc security guard and event security services."
                />
               <ServicesPageCard 
                img={img2}
                title="Guard Dog Service" 
                description="Security guard with dog handling skills and trained dog will be provided to the clients. The services include dog trainings and dog handling skills"
                />
               <ServicesPageCard 
                img={img3}
                title="Event Promotion Guarding" 
                description="We have significant experience in providing security services for a wide range of high profile events including: Roadshow, exhibition, and Music Festival etc. We understand the special skills required for effective stadium security and stewarding. "
                />
               <ServicesPageCard 
                img={img4}
                title="Surveillance Camera" 
                description="We offers a wide variety of security system packages individually tailored to your site requirements"
                />
               <ServicesPageCard 
                img={img5}
                title="Vehicle Patrol" 
                description="We offer Vehicle Patrols of residential and commercial premises as a cost-effective alternative to a permanent manned guarding presence. Our patrol vehicle will attend your property at Pre-arranged or random times and conduct a full check as specified in your instructions. Our clients include construction site, shops, offices, factories, etc. "
                />
               <ServicesPageCard 
                img={img6}
                title="Concierge" 
                description="Our concierge security officers are specially recruited based upon superior customer service skills, and trained to provide superior customer service and security. Our officers ensure that you maintain the professional visibility you want at your entrances, with the assurance that they have the training and resources available to protect the organization – all while successfully representing the unique style and atmosphere of your establishment."
                />

           </div>
        </div>
    )
}

export default ServicesPage
