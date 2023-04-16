import React from 'react';

import "./styles.scss";
import NavBar from '../../../components/navbar/NavBar';
import images from "../../../constants/images";
import Card from 'react-bootstrap/Card';


const Landing = () => {
  return (
    <div>
      < NavBar />
      <div className='hero-unit'>
        <div className='section-left'>
          <h3>We <span> continuously serve</span> your high expectations of delicious taste of food.</h3>
        </div>
        <div className='section-right'>
          <img src={images.heroimg} alt="food img" />
        </div>
      </div>

      <div className='section-title'> 
        <h2>Why choose us</h2>
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

      <div className='explore'>
        <div className='img-left'>
          <img src={images.menuimg} alt="food img" />
        </div>
        <div className='text-right'>
          <p>Items from our popular menu.</p>
          <h3>100+</h3>
          <h4>Items from our popular menu.</h4>
        </div>
      </div>
    </div>
  )
}

export default Landing
