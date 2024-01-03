import React from 'react'
import { FaStar } from "react-icons/fa";
import clientimg from '../../assests/images/home/review_img.png'

const Clientcard = () => {
    return (
        <div className="client_card">
            <div className="upper_content">
                <div className="img">
                    <img src={clientimg} alt="" />
                </div>
                <div className="img_content">
                    <h2>Alena Herwitz</h2>
                    <div className="rating">
                        <small>3 Months ago</small>
                        <div className="star" >
                            <FaStar color='#FFB800' className='icon' size={24} />
                            <FaStar color='#FFB800' className='icon' size={24} />
                            <FaStar color='#FFB800' className='icon' size={24} />
                            <FaStar color='#FFB800' className='icon' size={24} />
                            <FaStar color='#FFB800' className='icon' size={24} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower_content">
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
        </div>
    )
}

export default Clientcard
