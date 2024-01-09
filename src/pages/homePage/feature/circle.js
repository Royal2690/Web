import React from 'react'
import First1 from '../../../assests/images/Images/benifits-1.svg'
const Circle = () => {
    return (
        <>
            <div className="main_circle">
                <div className="circles">
                    <div className="first_circle">
                        <div className="circle_first_circle">
                            <div className="circle_imag">
                                <img src={First1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="second_circle">
                        <div className="circle_first_circle">
                            <div className="circle_imag">
                                <img src={First1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="third_circle">
                        <div className="circle_first_circle">
                            <div className="circle_imag">
                                <img src={First1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle_content">
                    <div className="first_cirle_content">1</div>
                    <div className="second_cirle_content">1</div>
                    <div className="third_cirle_content">1</div>
                </div>
            </div>
        </>
    )
}

export default Circle
