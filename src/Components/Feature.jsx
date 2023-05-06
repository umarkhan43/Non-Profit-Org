import React from 'react'
import "./Style.css"
import FeatureA from "../Assets/FeatureA.png"
import FeatureB from "../Assets/FeatureB.png"
import FeatureC from "../Assets/FeatureC.png"
const Feature = () => {
    return (
        <div className="feature__cause" id='cause'>
            <div className="title"><h1>Feature <span>Cause</span></h1></div>
            <div className="feature">
                <div className="card_one bg">
                    <img src={FeatureA} alt="" />
                    <h4>Relesed: 300,000$   Goles:800,000</h4>
                    <h2>African child need <br /> More foods water and clothes</h2>
                    <div className="cause__btn">
                        <button>Donate Now</button>
                    </div>

                </div>
                <div className="card_one bg">
                    <img src={FeatureB} alt="" />
                    <h4>Relesed: 300,000$   Goles:800,000</h4>
                    <h2>African child need <br /> More foods water and clothes</h2>
                    <div className="cause__btn">
                        <button>Donate Now</button>
                    </div>

                </div>
                <div className="card_one bg">
                    <img src={FeatureC} alt="" />
                    <h4>Relesed: 300,000$   Goles:800,000</h4>
                    <h2>African child need <br /> More foods water and clothes</h2>
                    <div className="cause__btn">
                        <button>Donate Now</button>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Feature
