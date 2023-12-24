import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel style={{ width: '100vw', overflow: 'hidden' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.net.vn/FGDO"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* Add any caption content here */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.net.vn/BdN0"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* Add any caption content here */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
