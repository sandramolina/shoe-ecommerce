import React, { useState } from 'react';
import { Button, Carousel, Col, Container, Row, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByProductId } from '../ProductSlice';
import { addItemToCart } from '../../Cart/CartItemSlice';

import './DetailedProduct.css';

const DetailedProduct = () => {
  const [sizes, setSizes] = useState([]);
  const [colourState, setColourState] = useState('');
  const [sizeState, setSizeState] = useState('');

  const dispatch = useDispatch();

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

  const getColorList = productStocks.map(
    (stockItem) => stockItem.colour.colourName
  );

  const uniqueColorList = [...new Set(getColorList)];

  const colourNodesDropdown = uniqueColorList.map((colour, i) => (
    <option key={i}>{colour}</option>
  ));

  //Size list
  const sizesNodesDropdown = sizes.map((size, i) => (
    <option key={i}>{size}</option>
  ));

  const handleColourSelection = (e) => {
    const selectedColour = e.target.value;
    setColourState(selectedColour);
    const itemsWithSelectedColour = productStocks.filter(
      (item) => item.colour.colourName === selectedColour
    );
    const sizesList = itemsWithSelectedColour.map((item) => item.size.size);
    setSizes(sizesList);
  };

  const handleSizeSelection = (e) => setSizeState(Number(e.target.value));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const stockId = getItemId(colourState, sizeState);
    const itemCartObject = {
      product,
      stockId,
      count: 1,
    };
    dispatch(addItemToCart(itemCartObject));
  };

  const getItemId = (colourState, sizeState) => {
    const tempList = productStocks.filter(
      (stockItem) =>
        (stockItem.size.size === sizeState) &
        (stockItem.colour.colourName === colourState)
    );
    const stockItemId = tempList[0].product_stock_id;
    return stockItemId;
  };

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
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className='mb-3' controlId='formColour'>
              <Form.Select
                aria-label='Select color'
                onChange={handleColourSelection}
                required
              >
                <option>Select color</option>
                {colourNodesDropdown}
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formSize'>
              <Form.Select
                aria-label='Select size'
                onChange={handleSizeSelection}
                required
              >
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
