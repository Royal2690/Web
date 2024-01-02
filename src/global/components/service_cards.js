import React from 'react'
const ServiceCards = ({ service_img, title }) => {
    return (
        <div className="service_card">
            <img src={service_img ? service_img :''} width='100%' alt="" />
            <div className="over_lay">
                <div className="content">
                    <h2>{title ? title : ''}</h2>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards
