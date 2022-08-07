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

  const colourNodesDropdown = productStocks.map((stockItem, i) => (
    <option key={i}>
      <p>{stockItem.colour.colourName}</p>
    </option>
  ));

  //Size list
  //TODO: How to eliminate the repeated? maybe it's better to display all sizes and just change disable the ones that are not found in the array

  const sizesNodesDropdown = productStocks.map((stockItem, i) => (
    <option key={i}>
      <p>{stockItem.size.size}</p>
    </option>
  ));

  return (
    <Container id='detailed-product-container'>
      <Row id='top-section'>
        <Col id='img-carousel'>
          <Carousel variant='dark' id='img-carousel-inner'>
            {carouselNodes}
          </Carousel>
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
              <Form.Select aria-label='Select color'>
                <option>Select color</option>
                {colourNodesDropdown}
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formSize'>
              <Form.Select aria-label='Select color'>
                <option>Select size</option>
                {sizesNodesDropdown}
              </Form.Select>
            </Form.Group>
            <Button variant='success' type='submit'>
              Add to Cart
            </Button>
          </Form>
        </Col>
      </Row>
      <Row id='bottom-section'>
        <Col>
          <h2>Product Description</h2>
          {product.shortDescription}
          <hr />
          {product.longDescription}
        </Col>
        <Col id='prod-specifications'>
          <h2>Product Specifications</h2>
          <ul>
            <li>
              <span className='bold-txt'>Brand: </span>
              {product.brand}
            </li>
            <li>
              <span className='bold-txt'>Product Code: </span>
              {product.productCode}
            </li>
            <li>
              <span className='bold-txt'>Main Shoe Material: </span>
              {product.mainShoeMaterial}
            </li>
            <li>
              <span className='bold-txt'>Fastening: </span>
              {product.fastening}
            </li>
            <li>
              <span className='bold-txt'>Sole: </span>
              {product.rubber}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailedProduct;
