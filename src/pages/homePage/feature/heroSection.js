import React from 'react'
import banner from '../../../assests/images/home/banner/banner.svg'
const HeroSection = () => {
    return (
        <>
            <section class="Banner_Section">
                <div class="Page-width">
                    <div class="Banner_Inner_Section">
                        <div class="Banner_Content">
                            <small>Best in Dubai</small>
                            <p class="Intro">Welcome To</p>
                            <h2>Home <span>Comfort</span></h2>
                            <p class="Descrition">
                                Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
                            </p>
                            <div class="Banner_Button">
                                <button class="Button1">Contact Us</button>
                                <button class="Button2">Learn More</button>
                            </div>
                        </div>
                        <div class="Banner_img">
                            <img src={banner} alt="">
                            </img></div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default HeroSection
