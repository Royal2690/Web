import React from 'react'
import ServiceCards from '../../../global/components/service_cards'
const OurServices = () => {
    return (
        <div className='ourService page_width'>
            <h1 className='global_title'><span> Explore our </span> Services</h1>
            <div className="card_grid">
                <ServiceCards service_img='' title={'Duct Cleaning'} />
                <ServiceCards service_img='' title='' />
                <ServiceCards service_img='' title='' />
                <ServiceCards service_img='' title='' />
            </div>
        </div>
    )
}

export default OurServices

