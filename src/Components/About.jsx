import React from 'react'
import about from "../Assets/left-section-img.png"
import "./Style.css"
const About = () => {
    return (
        <div className="about" id='about'>
            <div className="about__container">
                <div className="left__section">
                    <img src={about} alt="" />

                </div>
                <div className="right__section">
                    <h1>WE ARE <br /> NON PROFIT TEAM </h1>
                    <p>We believe that everyone should have access to clean water, regardless of their background or where they live. We work closely with local communities to identify their water needs and implement sustainable solutions that will benefit them for years to come.

                        Our organization relies on the generosity of donors like you to fund our water projects. Every donation helps us make a difference in the lives of those who need it most. By donating to our organization, you are contributing to a better future for Asian communities.

                        Thank you for considering supporting our mission. Together, we can make a difference and provide clean water to those who need it the most.
                    </p>
                    <button className='donate_btn about__btn'>Donate Now</button>

                </div>
            </div>
        </div>
    )
}

export default About
