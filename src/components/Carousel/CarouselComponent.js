import React from 'react';
import { Carousel } from 'react-bootstrap';
import bg1 from '../image/bg1.jpg';
import bg2 from '../image/bg2.jpg';
import bg3 from '../image/bg3.jpg';

const CarouselComponent = () => {
  return (
<Carousel style={{ width: '100%', overflow: 'hidden', margin: '0', padding: '0', left: '0', boxSizing: 'border-box' }}>
            <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="First slide"
        />
      </Carousel.Item>
	  <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg1}
          alt="First slide"
        />
      </Carousel.Item>
	  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
