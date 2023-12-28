import React from 'react'
import Card from '../../../assests/images/home/service_card_oe.jpg'
const OurServices = () => {
    return (
        <div className='ourService page_width'>
            <h1 className='global_title'><span> Explore our </span> Services</h1>
            <div className="card_grid">
                <div className="service_card">
                    <img src={Card} width='100%' alt="" />
                    <div className="over_lay">
                        <h2>AC DUCT</h2>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices

