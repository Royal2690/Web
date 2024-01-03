import React from 'react'
import './style.css'
import OurServices from './feature/ourServices'
import OurClient from './feature/ourClient'
import HeroSection from './feature/herosection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <OurClient />
            <OurServices />
        </>
    )
}

export default HomePage
