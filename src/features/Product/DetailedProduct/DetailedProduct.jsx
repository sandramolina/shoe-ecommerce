import React from 'react';
import { Button, Carousel, Col, Container, Row, Form } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByProductId } from '../ProductSlice';

import './DetailedProduct.css';

const DetailedProduct = () => {
  const { id } = useParams();

  //Selection of product
  const product = useSelector((state) =>
    selectByProductId(state.productsState, Number(id))
  );

  //Image carousel generation
  const imagesUrlList = product.images;
  const carouselNodes = imagesUrlList.map((imgUrl, i) => (
    <Carousel.Item key={i}>
      <img className='d-block w-100' src={imgUrl} alt='Product' />
    </Carousel.Item>
  ));

  //Colours list
  const productStocks = product.productStocks;
  const colourList = productStocks.map((stockItem, i) => (
    <Button variant='success' key={i} className='colour-btn-dp'>
      {stockItem.colour.colourName}
    </Button>
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
            Rating: {product.rating.averageRate}
            <span className='rate-count'>({product.rating.count} Reviews)</span>
          </p>
          <Form>
            <Form.Group className='mb-3' controlId='formColour'>
              <Form.Label>Colors</Form.Label>
              {colourList}
            </Form.Group>
            <Form.Group className='mb-3' controlId='formSize'>
              <Form.Label>Sizes</Form.Label>
            </Form.Group>
            <Button variant='success' type='submit'>
              Add to Cart
            </Button>
          </Form>
        </Col>
      </Row>
      <Row id='bottom-section'>
        <Col>{product.shortDescription}</Col>
      </Row>
    </Container>
  );
};

export default DetailedProduct;
