import React from 'react'
import "./Style.css"
import Gallery_Footer1 from "../Assets/Gallery_Footer1.jpg"
import Gallery_Footer2 from "../Assets/Gallery_Footer2.jpg"
import Gallery_Footer3 from "../Assets/Gallery_Footer3.jpg"
import Gallery_Footer4 from "../Assets/Gallery_Footer4.jpg"
import Gallery_Footer5 from "../Assets/Gallery_Footer5.jpg"
import Gallery_Footer6 from "../Assets/Gallery_Footer6.jpg"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact container " id='contact'>
        <div className="contact_form my___detail">
          <i className="fa-solid fa-phone contact__phone"></i>
          <p>Do you have <br /> a question? </p>
          <h3>+0123 456 789</h3>
          <i className="fa-solid fa-envelope mail"></i>  <input type="text" placeholder='' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer__section">
        <div className="our__mission">
          <h1>Our Vision</h1>
          <p>Our ultimate vision is to create a world where <br /> everyone has access to clean and safe water.  <br />  We believe that this is not only a basic human <br /> rightbut also a key factor in reducing poverty <br /> and promoting sustainable development. By  <br />working together,  we can make this vision <br /> a reality for Asian communities and beyond..</p>
        </div>
        <div className="links">
          <div className="quick__links">
            <p>Quick Links</p>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#cause">Cause</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>

        </div>
        <div className="gallery">
          <p>Gallery</p>

          <div className="gallery__photos">
            <div>
              <img src={Gallery_Footer1} alt="" />
              <img src={Gallery_Footer2} alt="" />
            </div>
            <div>
              <img src={Gallery_Footer3} alt="" />
              <img src={Gallery_Footer4} alt="" />
            </div>
            <div>
              <img src={Gallery_Footer5} alt="" />
              <img src={Gallery_Footer6} alt="" />
            </div>
          </div>

        </div>
        <div className="contact__us">
          <p>Contact Us</p>
          <div>


            <h2>
              <i className="fa-solid fa-location-dot location__icon"></i>
              Head Office</h2>
            <p>123, Main Street, Your City <br /> USA 789456  </p>
            <p className="horizantal__line"> <hr /></p>
          </div>

          <div>

            <h2>
              <i className="fa-solid fa-phone phone__icon"></i>
              Phone Number</h2>
            <p>+123 456 7890 <br /> +123 456 7890  </p>
            <p className="horizantal__line"> <hr /></p>
          </div>



          <div>


            <h2>
              <i className="fa-solid fa-envelope mail__icon"></i>
              Email</h2>
            <p> <a href=" moaviyaomar@gmial.com "> moaviyaomar@gmial.com </a><br />
            <a href="https://umar-code-corner.web.app/">https://umar-code-corner.web.app/</a>  </p>
          </div>

        </div>

      </div>
      <div className="copyright">
        <p>  Copyright © 2023, Umar's Code Corner All Rights Reserved. </p>
      </div>

    </div>
  )
}

export default Footer
