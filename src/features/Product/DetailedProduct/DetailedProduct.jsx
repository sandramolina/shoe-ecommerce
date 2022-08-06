import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByProductId } from '../ProductSlice';

import './DetailedProduct.css';

const DetailedProduct = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    selectByProductId(state.productsState, Number(id))
  );

  const imagesUrlList = product.images;
  const carouselNodes = imagesUrlList.map((imgUrl) => (
    <Carousel.Item>
      <img className='d-block w-100' src={imgUrl} alt='Product' />
    </Carousel.Item>
  ));

  return (
    <Container id='detailed-product-container'>
      <Row id='top-section'>
        <Col>
          <Carousel>{carouselNodes}</Carousel>
        </Col>
        <Col>
          {product.brand}
          <h2>{product.title}</h2>
          <p>
            Rating: {product.rating.averageRate}{' '}
            <span className='rate-count'>({product.rating.count} Reviews)</span>
          </p>
        </Col>
      </Row>
      <Row id='bottom-section'>
        <Col>{product.shortDescription}</Col>
      </Row>
    </Container>
  );
};

export default DetailedProduct;
