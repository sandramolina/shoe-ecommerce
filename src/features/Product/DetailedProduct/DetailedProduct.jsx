import React from 'react';
import {
  Button,
  Carousel,
  Col,
  Container,
  Row,
  Form,
  Dropdown,
} from 'react-bootstrap';

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
  // const colourList = productStocks.map((stockItem, i) => (
  //   <Button variant='success' key={i} className='colour-btn-dp'>
  //     <img src={stockItem.colour.colourImage} alt='colour' width='20px' />
  //     {stockItem.colour.colourName}
  //   </Button>
  // ));

  const colourNodesDropdown = productStocks.map((stockItem) => (
    <Dropdown.Item className='colour-dd'>
      <img
        className='colour-img'
        src={stockItem.colour.colourImage}
        alt={stockItem.colour.colourName}
      />
      <p>{stockItem.colour.colourName}</p>
    </Dropdown.Item>
  ));

  //Size list
  //TODO: How to eliminate the repeated? maybe it's better to display all sizes and just change disable the ones that are not found in the array
  const sizeList = productStocks.map((stockItem, i) => (
    <div>
      <input
        type='radio'
        id={`size-${i}`}
        name='size-choice'
        value={stockItem.size.size}
      ></input>
      <label for={`size-${i}`}>{stockItem.size.size}</label>
    </div>
    // <Button variant='success' key={i} className='colour-btn-dp'>
    //   {stockItem.size.size}
    // </Button>
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
              <Dropdown size='sm'>
                <Dropdown.Toggle variant='success'>
                  Select Color
                </Dropdown.Toggle>
                <Dropdown.Menu>{colourNodesDropdown}</Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formSize'>
              <Form.Label>Sizes</Form.Label>
              {sizeList}
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
