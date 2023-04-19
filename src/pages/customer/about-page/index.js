import React from 'react'
import "./styles.scss";
import NavBar from '../../../components/navbar/NavBar';
import Footer from '../../../components/footer/footer';
import images from "../../../constants/images";


const about = () => {
  return (
    <div>
      < NavBar />
      <div className='about-us'>
        <div className='our-story'>
          <div className='about-title'>
            <h3>Our little story 🧑🏻‍🍳 </h3>
            <p>We have always been the only favourite for its authentic Andhra Cuisine dishes with the service of 20 successful years. In the journey, we have been improving in our process without compromising our quality and service. We focus on providing great food with impeccable ambience.</p>
          </div>
          <div className='about-desc'>
            <p>We specialise in withstanding the authenticity of Andhra cuisine, Like Chicken Fry Piece Biryani, Andhra Chicken Curry, Chepala Pulusu and many more. Planning our process according to the safety norms. We are always happy to serve you with all the love. ❤️</p>
          </div>
        </div>
        <div className='cover-img'>
         <img src={images.aboutus} alt="res img" />
        </div>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}



export default about
