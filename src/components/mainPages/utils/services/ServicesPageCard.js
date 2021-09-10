import React from 'react'

const ServicesPageCard = ({img, title, description}) => {
    return (
        <div className="bg-white servicesCard mb-5">
            <div className="servicesCard__header">
                <h2 className="font-bebas font-50 border-bottom mb-4">{title}</h2>
            </div>
            <div className="row">
                <div className="col-md-5 serviceCardImg">
                <img src={img} alt="post-service-img" className="w-100" />
                </div>
                <div className="col-md-7">
                    <p className="font-dosis font-description">
                        { description }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPageCard
