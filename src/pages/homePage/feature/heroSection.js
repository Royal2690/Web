import React from 'react'
import banner from '../../../assests/images/home/banner/banner.svg'
import who from '../../../assests/images/home/who_img.jpg'
import any from '../../../assests/images/home/who_img.jpg'
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

            <section class="Banner_Section3">
                <div class="Page-width3">
                    <div class="Banner_Inner_Section3">
                        <div class="Banner_img3">
                            <img src={who} alt="">
                            </img></div>
                        <div class="Banner_Content3">
                            <h2>Who We <span>Are?</span></h2>
                            <p class="Descrition3">Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
                            <p class="Paragraph3">We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience. Our experts will give you the most satisfying experience and professionalism. On your demand, all of our best home maintenance and renovation services are available at the very right time and place.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="Banner_Section4">
                <div class="Page-width4">
                    <div class="Banner_Inner_Section4">
                        <div class="Banner_Content4">
                            <h3>Company Authority</h3>
                            <p>Basically, finding the right person to do up the works is very much important and for that, there are certain things you
                                should keep in mind while appointing a service man. Analyze the best service provider who can perform the works well and
                                give you desired results. You can search for professional home service companies online and get the best company that
                                meets up your demands.</p>
                            <p class="Paragraph4">Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim
                                and priority of Home Comfort are to add value to our consumers lives by providing smart solutions to all their
                                problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
                        </div>
                        <div class="Banner_img4">
                            <img src={any} alt="">
                            </img></div>
                    </div>
                </div>
            </section>

            <div class="Banner6">
                <h2 class="Intro6">Quick Service On Emergency</h2>
                <h3 class="Contact6">+92331774265</h3>
            </div>
        </>
    )
}

export default HeroSection
