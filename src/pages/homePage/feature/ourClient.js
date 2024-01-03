import React from 'react'
import clientimg from '../../../assests/images/home/review_img.png'
const OurClient = () => {
    return (
        <div className='page_width our_client'>
            <div className='header_content'>
                <h2 className='our_title'>Our <span> Clients</span></h2>
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
            </div>
            <div className="client_card_grid">
                <div className="client_card">
                    <div className="upper_content">
                        <div className="img">
                            <img src={clientimg} alt="" />
                        </div>
                        <div className="img_content">
                            <h2>Alena Herwitz</h2>
                            <div className="rating">
                                <small>3 Months ago</small>
                                <div className="star"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lower_content">
                        <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient
