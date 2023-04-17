import React from "react";
import "./styles.scss";
import Carousel from 'react-bootstrap/Carousel';
import images from "../../constants/images";

function CarouselTestimonials() {
  return (
    <div className="carousel">
    <Carousel variant="dark">
      <Carousel.Item>
      <img src={images.white} alt="img" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={images.white} alt="img" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={images.white} alt="img" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselTestimonials;
