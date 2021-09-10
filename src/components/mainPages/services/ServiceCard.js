import React from 'react'

const ServiceCard = ({title, subtitle, icon}) => {
    return (
        <div className="card serviceCard border-0 shadow-4 rounded py-4">
            <div className="card-header bg-white d-flex align-items-center flex-column">
                <span class="material-icons font-50 mb-2 color-primary">{icon}</span>
                <h4 className="font-dosis text-center">{title}</h4>
            </div>
            <div className="card-body d-flex align-items-center flex-column">
                <p className="card-text text-center">{subtitle}</p>
            </div>
        </div>
    )
}

export default ServiceCard
