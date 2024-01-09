import React from 'react'
import logo from '../../assests/images/logo/logo.svg'
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="coloumn_zero">
                    <img src={logo} alt=""></img>
                    <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
                </div>
                <div class="coloumn_one">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Service
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div><div class="coloumn_two">
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/' rel='noreferrer' target="_blank">Facebook</a>
                        </li>
                        <li>
                            Twitter
                        </li>
                        <li>
                            Linkedin
                        </li>
                        <li>
                            Instagram
                        </li>
                    </ul>
                </div><div class="coloumn_three">
                    <ul>
                        <li>
                            +923317742695
                        </li>
                        <li>
                            info@homecomfort.com
                        </li>
                    </ul>
                    <div class="news_letter">
                        <input type="text" placeholder="Enter Email"></input>
                        <button>send</button>
                    </div>
                </div>

            </footer>
            <div>
                <div><hr></hr></div>
                <div class="Copyrights">
                    <p>&#169;Copyright reserved by HomeComfort</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
