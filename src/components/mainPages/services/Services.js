import React from 'react'
import ServiceCard from './ServiceCard'
import "./Services.css"

const Services = () => {
    return (
        <div className="services pt-5 pb-5">
           <div className="services__header d-flex justify-content-center mb-5">
                <h1 className="font-play border-bottom">Services</h1>
           </div>
           {/* Services Cards */}
           <div className="container">
                <div className="row gap-5 justify-content-center flex-wrap">
                   <ServiceCard  title="Guard Dog Service" subtitle="Dog Handler Patrol" icon="pets"/>
                   <ServiceCard  title="Security Guarding Service" subtitle="Residential, Commercial, Construction Site" icon="local_police"/>
                   <ServiceCard  title="Event Promotion Guarding" subtitle="Roadshow , V.I.P Protection" icon="celebration"/>
                   <ServiceCard  title="Survaillance Camera" subtitle="Professional Surveillance Services for 24/7 peace of mind" icon="camera"/>
                   <ServiceCard  title="Vehicle Patrol" subtitle="Vehicle Patrol Services" icon="directions_car"/>
                   <ServiceCard  title="Concierge" subtitle="Friendly Front Desk Staff to help with any enquiries" icon="face"/>
                </div>
           </div>
        </div>
    )
}

export default Services
