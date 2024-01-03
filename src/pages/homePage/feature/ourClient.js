import React from 'react'
import Clientcard from '../../../global/components/client_card'
const OurClient = () => {
    return (
        <div className='page_width our_client'>
            <div className='header_content'>
                <h2 className='our_title'>Our <span> Clients</span></h2>
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
            </div>
            <div className="client_card_grid">
                <Clientcard />
                <Clientcard />
                <Clientcard />
                <Clientcard />
                <Clientcard />
                <Clientcard />

            </div>
        </div>
    )
}

export default OurClient
