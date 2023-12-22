import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel style={{ marginTop: '-20px' }}> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-xsp2-1.xx.fbcdn.net/v/t39.30808-6/408964708_677322674531810_3694463595245086991_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEyuQuzy-P1NVVzc8CQ9BstqUvVNYKjJhWpS9U1gqMmFSmDu2z3arki-s2ogOOW6q04pVbGD4-e0FU1KLB_V26p&_nc_ohc=wh0eE4PhARsAX_1sV3c&_nc_ht=scontent-xsp2-1.xx&oh=00_AfCfjUGgu9rFU9eWsev-Wj0mxGBadqj1Gs1J4t6kLwvK4w&oe=65852FCA"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/407152693_673389231591821_5489099509915460617_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9534ce&_nc_eui2=AeEimUCicn_hxvEzWsAkwM3i0j4aJbqQyXHSPholupDJca2LmXKO9eiugy5FflAAKCSPKE27CBUdKpPFhpghHJ4q&_nc_ohc=4JZ-eCe2H4AAX8SCY7X&_nc_ht=scontent-xsp1-2.xx&oh=00_AfDSfQ6ee3FR_ZInPrMusm0_4FJuMB9k42ey10J-UoeSWA&oe=6586C5A9"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
  
    </Carousel>
  );
};

export default CarouselComponent;
