import React from 'react'
import "./styles.scss";
import NavBar from '../../../components/navbar/NavBar';
import Footer from '../../../components/footer/footer';
import images from "../../../constants/images";
import Card from 'react-bootstrap/Card';


const menu = () => {
  return (
    <div>
      < NavBar />
      <div className='menu-title'>
        <h4>Our Authentic Delicacies</h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.food} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.food} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.food} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.food} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='menu-title-one'>
        <h4>🥗 Appetizers</h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='menu-title-one'>
        <h4> 🍱 Starters </h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='menu-title-one'>
        <h4>🍲 Main Course</h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='menu-title-one'>
        <h4>🍦 Desserts</h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and.
              </Card.Text>
              <Card.Text>
                <b>$27</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default menu
