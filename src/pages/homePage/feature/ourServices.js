import React from 'react'
import ServiceCards from '../../../global/components/service_cards'
import service_img from '../../../assests/images/home/img1.png'
import service_img2 from '../../../assests/images/home/service_card_oe.jpg'
import service_img3 from '../../../assests/images/home/service_card_two.jpg'
import service_img4 from '../../../assests/images/home/service.webp'
const OurServices = () => {
    return (
        <div className='ourService page_width'>
            <h1 className='global_title'><span> Explore our </span> Services</h1>
            <div className="card_grid">
                <ServiceCards service_img={service_img} title={'AC Service'} />
                <ServiceCards service_img={service_img2} title={'Duct Cleaning'} />
                <ServiceCards service_img={service_img3} title={'Handy Man'} />
                <ServiceCards service_img={service_img4} title={'Plumbing'} />
            </div>
        </div>
    )
}

export default OurServices

