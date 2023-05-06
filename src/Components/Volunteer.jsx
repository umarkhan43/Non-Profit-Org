import React from 'react'
import person1 from "../Assets/Volunteer1.jpg"
import person2 from "../Assets/Volunteer2.jpg"
import person3 from "../Assets/Volunteer3.jpg"
import person4 from "../Assets/Volunteer4.jpg"

const Volunteer = () => {
    return (
        <div className="volunteer" >

<div className="title"><h1>Best <span>Volunteer</span></h1></div>
            <div className="details">
                <div className="person_one">
                    <img src={person1} alt="" />
                    <h2>Elizabeth</h2>
                    <h3>Valunteer</h3>
                </div>

                <div className="person_one">
                    <img src={person2} alt="" />
                    <h2>John Doe</h2>
                    <h3>Valunteer</h3>
                </div>
                
                <div className="person_one">
                    <img src={person3} alt="" />
                    <h2>Kate</h2>
                    <h3>Valunteer</h3>
                </div>

                <div className="person_one">
                    <img src={person4} alt="" />
                    <h2>Emily</h2>
                    <h3>Valunteer</h3>
                </div>

            </div>


        </div>
    )
}

export default Volunteer
