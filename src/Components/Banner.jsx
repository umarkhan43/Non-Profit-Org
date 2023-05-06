import React from 'react'
import "./Style.css"
const Banner = () => {
    return (
        <div className="banner"  id='banner'>
            <div className="heading">
                <h4>BRING CLEAN WATER TO <br /> <span>AN ASIAN VILLAGE</span>   </h4>

            </div>
            <div className="data">
                <p>
                Welcome to our water nonprofit organization! <br />  We are dedicated to providing clean and safe <br /> water to Asian communities in need.
                
                </p>

            </div>
            <div className="btn"></div>
            <button className='donate_btn'>Donate Now</button>
        </div>
    )
}

export default Banner
