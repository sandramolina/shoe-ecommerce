import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';
import banner_kids from '../../img/banner_kids.png';

const HomeCarousel = () => {
  return (
    <Carousel id='carousel-container'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://betelli.uk/data/include/img/links/1593074366_rwd_desktop.jpg'
          alt='banner men shoes'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='https://betelli.uk/data/include/img/links/1593074434_rwd_desktop.jpg'
          alt='banner women shoes'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src={banner_kids}
          alt='banner kids shoes'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
