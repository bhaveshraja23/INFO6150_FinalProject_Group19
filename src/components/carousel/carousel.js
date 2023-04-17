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
          <h4>“I will definitely be back!”</h4>
          <p>Very good service, good menu … not overly extensive. Food was very good quality all around.</p>
          <i> - Raghuvaran </i>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={images.white} alt="img" />
        <Carousel.Caption>
          <h4>“Always worth the stop.”</h4>
          <p>“This is always our dinner stop before heading home from office. Always delicious.”</p>
          <i> - Krishna </i>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={images.white} alt="img" />
        <Carousel.Caption>
          <h4>“Their biryani are top-notch.”</h4>
          <p>
          The food was excellent and so was the service.  I had the fry piece biryani was awesome. 
          </p>
          <p>
          <i> - Samantha </i>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselTestimonials;
