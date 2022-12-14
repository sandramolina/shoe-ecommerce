import React from 'react';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

import './CartItem.css';

const CartItem = ({ productInCart }) => {
  const countTimesPrice =
    productInCart.count * productInCart.product.price.amount;
  return (
    <Card>
      <Card.Body>
        <Card.Img
          alt={`beautiful representation for the product ${productInCart.product.title}`}
          className='.img-fluid. max-width: 10%'
          src={productInCart.product.images[0]}
        />
        <Card.Title>{productInCart.product.title}</Card.Title>
        <Card.Subtitle>Colour: {productInCart.colour}</Card.Subtitle>
        <Card.Subtitle>Size: {productInCart.size}</Card.Subtitle>
        <Container fluid>
          <Row>
            <Col>
              Unit Price:
              {productInCart.product.price.currencyUnit.symbol}{' '}
              {productInCart.product.price.amount}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Button variant='success' size='sm'>
                -
              </Button>
              <span id='count-number'>{productInCart.count}</span>
              <Button variant='success' size='sm'>
                +
              </Button>
            </Col>
            <Col>
              <Button type='button' variant='success' id='remove-button'>
                <Trash size={15} />
              </Button>
            </Col>
            <Col className='subtotal-text'>
              Subtotal:
              {productInCart.product.price.currencyUnit.symbol}
              {countTimesPrice}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
