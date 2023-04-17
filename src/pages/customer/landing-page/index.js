import React from 'react';

import "./styles.scss";
import NavBar from '../../../components/navbar/NavBar';
import images from "../../../constants/images";
import Card from 'react-bootstrap/Card';
import CarouselTestimonials from '../../../components/carousel/carousel';


const Landing = () => {
  return (
    <div>
      < NavBar />
      <div className='hero-unit'>
      <img src={images.food} alt="food img" />
      <div className='text-container'>
          <h2>We <span> continuously serve</span> your high expectations of delicious taste of food.</h2>
          <button className='menu-btn'>View Menu</button>
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
          <button className='menu-btn'>View Menu</button>
        </div>
      </div>

      <div className='testimonials'> 
        <CarouselTestimonials />
      </div>

      <div className='reserve-table'>
        
      </div>
    </div>
  )
}

export default Landing
