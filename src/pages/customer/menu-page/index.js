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
            <Card.Title>MoMOs</Card.Title>
              <Card.Text>
                A steam filled dumplings 
              </Card.Text>
              <Card.Text>
                <b>$15</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Chicken wings</Card.Title>
              <Card.Text>
               Deep fried and dipped in a sauce
              </Card.Text>
              <Card.Text>
                <b>$20</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Onion Rings</Card.Title>
              <Card.Text>
                Dipped in bread crumps and deep fried
              </Card.Text>
              <Card.Text>
                <b>$13</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Mozzarilla sticks</Card.Title>
              <Card.Text>
                Elongated peices of mozzarilla deep fried
              </Card.Text>
              <Card.Text>
                <b>$18</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* <div className='item-cards'>
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
      </div> */}

      <div className='menu-title-one'>
        <h4> 🍱 Drinks </h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Whisky</Card.Title>
              <Card.Text>
                Alcholic beverage made from fermented grain mashed
              </Card.Text>
              <Card.Text>
                <b>$17.99</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Wine</Card.Title>
              <Card.Text>
              Alcholic beverage made from fermented grapes 
              </Card.Text>
              <Card.Text>
                <b>$12.67</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Vodka</Card.Title>
              <Card.Text>
                Distilled potatoes
              </Card.Text>
              <Card.Text>
                <b>$10.99</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Coca cola</Card.Title>
              <Card.Text>
                carbonated drink with extracted coca
              </Card.Text>
              <Card.Text>
                <b>$3.59</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
{/* 
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
      </div> */}

      <div className='menu-title-one'>
        <h4>🍲 Main Course</h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Chicken Biryani</Card.Title>
              <Card.Text>
               Mixed rice dish with Indian spices
              </Card.Text>
              <Card.Text>
                <b>$29.99</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Pasta</Card.Title>
              <Card.Text>
                Unleavened dough of wheat flour mixed with water
              </Card.Text>
              <Card.Text>
                <b>$22</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Noodles</Card.Title>
              <Card.Text>
              Unleavened dough rolled as flat and cut ,into long strings
              </Card.Text>
              <Card.Text>
                <b>$15</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>PIZZA</Card.Title>
              <Card.Text>
                Italian origin flat based of wheat based dough
              </Card.Text>
              <Card.Text>
                <b>$14</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* <div className='item-cards'>
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
      </div> */}

      <div className='menu-title-one'>
        <h4>🍦 Desserts</h4>
      </div>

      <div className='item-cards'>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Pastries</Card.Title>
              <Card.Text>
                A baked food with savoury or sweetened
              </Card.Text>
              <Card.Text>
                <b>$7.55</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>chocolate brownie</Card.Title>
              <Card.Text>
                cokkie brownie made of chocolate
              </Card.Text>
              <Card.Text>
                <b>$4.57</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Mochi</Card.Title>
              <Card.Text>
                Japanes Icrecream covered with rice 
              </Card.Text>
              <Card.Text>
                <b>$8.5</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='f-card'>
          <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Tieramesu</Card.Title>
              <Card.Text>
                Icrecream cake
              </Card.Text>
              <Card.Text>
                <b>$6.55</b>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
{/* 
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
      </div> */}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default menu
