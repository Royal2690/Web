import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/images/logo/logo.svg'

const Header = () => {
    return (
        <div>
            <header>
                <div class="logo_img " id="">
                    <img src={logo} alt=""></img>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>

                        </li>
                        <li>
                            <Link to="/about-us">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us">
                                Contact
                            </Link>
                        </li>
                        <li class="Header_Btn">
                            +923317742695
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
