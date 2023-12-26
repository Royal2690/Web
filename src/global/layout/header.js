import React from 'react'
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
                            Home
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact
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
