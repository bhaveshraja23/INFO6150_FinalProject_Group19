import React from 'react';

import "./styles.scss";
import NavBar from '../../../components/navbar/NavBar';
import images from "../../../constants/images";
import Card from 'react-bootstrap/Card';
import CarouselTestimonials from '../../../components/carousel/carousel';
import Footer from '../../../components/footer/footer';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
      < NavBar />
      <div className='hero-unit'>
      <img src={images.food} alt="food img" />
      <div className='text-container'>
          <h2>We <span> continuously serve</span> your high expectations of delicious taste of food.</h2>
          <button className='menu-btn'><Link to="/menu" className="menu-btn">View Menu</Link></button>
        </div>
        {/* <div className='section-left'>
          <h3>We <span> continuously serve</span> your high expectations of delicious taste of food.</h3>
        </div> */}
        {/* <div className='section-right'>
          <img src={images.heroimg} alt="food img" />
        </div> */}
      </div>

      <div className='section-title'> 
        <h2>Why choose us</h2>
        <p>We can give you thousands of reasons, but here are few important.</p>
      </div>

      <div className='why-choose-us'>
      <div className='features'>
        <div className='f'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Healthy</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Delicious Food</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Best Offers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='features'>
        <div className='f'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Healthy</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Delicious Food</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Best Offers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>

      <div className='explore'>
        <div className='img-left'>
          <img src={images.spices} alt="food img" />
        </div>
        <div className='text-right'>
          <p>Items from our popular menu.</p>
          <h1>100+</h1>
          <h3>Items from our popular menu.</h3>
          <button className='menu-btn'><Link to="/menu" className="menu-btn">View Menu</Link></button>
        </div>
      </div>

      <div className='section-title'> 
        <h2>Our Customers love us!</h2>
        {/* <p>We can give you thousands of reasons, but here are few important.</p> */}
      </div>

      <div className='testimonials'> 
        <CarouselTestimonials />
      </div>

      <div className='reserve-table'>
        <div className='reserve-form'>
        <div className="heading">
          <h3>
            <b>Reserve your table</b>
          </h3>
          <p>Book your table for hassle-free dining</p>
        </div>
          <div className='form'>
            <div className="form-item">
              <label className="form-label">Name</label>
              <input
                className="login-input"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="form-item">
              <label className="form-label">Date</label>
              <input
                className="login-input"
                type="text"
                placeholder="Select Date"
              />
            </div>
            <div className="form-item">
              <label className="form-label">Time</label>
              <input
                className="login-input"
                type="text"
                placeholder="Select Time"
              />
            </div>
            <div className="form-item">
              <label className="form-label">No.of People</label>
              <input
                className="login-input"
                type="text"
                placeholder="pax"
              />
            </div>
            <div>
            <button className="btnlogin" type="submit">
            Reserve Now
            </button>
        </div>
          </div>
        </div>
        <div className='table-img'>
          <img src={images.table} alt="food img" />
        </div>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Landing
