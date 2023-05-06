import React from 'react'
import "./Style.css"
import John from "../Assets/John.png"
import image1 from "../Assets/people01.png"
import image2 from "../Assets/people_say_img2.jpg"
import image3 from "../Assets/people_say_img3.jpg"
import image4 from "../Assets/people_say_img4.jpg"
import image5 from "../Assets/people_say_img5.jpg"
const People = () => {
  return (
    <div className="people" id='news'>
      <div className="heading"><h1>what people say</h1></div>
      <div className="people__says">
        <div className="people__review">
          <div className="content">
            <p><ol>
            Our Approach: At our organization, we believe in a holistic approach to providing clean water solutions. We work with local communities to identify their specific needs and develop sustainable solutions that will meet those needs. This includes not only providing access to clean water but also education on proper hygiene and sanitation practices.
            <br />How to Get Involved: If you're interested in supporting our cause, there are many ways to get involved. You can donate to our organization, volunteer your time and skills, or even start a fundraising campaign. Every contribution, no matter how small, makes a difference in the lives of those we serve.
            </ol>
            </p>
            <div className="logo__title">
              <img src={John} alt="" />
            </div>
           
          </div>

        </div>
        
      </div>
      
      <div className="people__images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
    </div>
  )
}

export default People
