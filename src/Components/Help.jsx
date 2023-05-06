import React from 'react'
import "./Style.css"
import image1 from "../Assets/image1.png"
import image2 from "../Assets/help_pic2.jpg"
import image3 from "../Assets/help_pic3.jpg"
import image4 from "../Assets/help_pic4.jpg"
const Help = () => {
    return (
        <div className="help" id='events'>
            <div className="title"><h1>How could <span>you help ?</span></h1></div>


            <div className="info__container">
                <div className="details__contianer">
                    <div className="info">
                        <img src={image1} alt="" className='' />

                    </div>
                    <h1>Vision</h1>
                    <p>Bringing Clean Water to Asian Communities: <br /> Our Mission and Impact</p>
                </div>

                {/* Second */}
                <div className="details__contianer">
                    <div className="info">
                        <img src={image2} alt="" className='' />

                    </div>
                    <h1>Give Inspiration </h1>
                    <p>The Faces of Our Work: <br /> Meet the People We Serve
</p>
                </div>

                {/* Third */}
                <div className="details__contianer">
                    <div className="info">
                        <img src={image3} alt="" className='' />

                    </div>
                    <h1>Motivation </h1>
                    <p>Changing Lives with Clean Water: <br /> Our Stories of Hope</p>
                </div>
                
                {/* Fourth */}
                <div className="details__contianer">
                    <div className="info">
                        <img src={image4} alt="" className='' />

                    </div>
                    <h1>Expertise skill </h1>
                    <p>Together for Water: <br /> Join Us in Our Fight Against the Water Crisis</p>
                </div>
                
                

              




            </div>
        </div>
    )
}

export default Help
