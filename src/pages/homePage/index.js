import React from 'react'
import './style.css'
import OurServices from './feature/ourServices'
import OurClient from './feature/ourClient'
import HeroSection from './feature/herosection'
import Quickservice from './feature/quickservice'
import Circle from './feature/circle'
import WhoWe from './feature/whoWe'
import OurCompany from './feature/ourCompany'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Circle />
            <OurServices />
            <WhoWe />
            <OurCompany />
            <OurClient />
            <Quickservice />
        </>
    )
}

export default HomePage
