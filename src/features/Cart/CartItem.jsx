import React from 'react';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const CartItem = ({ productInCart }) => {
  const countTimesPrice =
    productInCart.count * productInCart.product.price.amount;
  return (
    <Card>
      <Card.Body>
        <Card.Img
          alt={`beautiful representation for the product ${productInCart.product.title}`}
          className='.img-fluid. max-width: 50%'
          src={productInCart.product.images[0]}
        />
        <Card.Title>{productInCart.product.title}</Card.Title>
        <Card.Subtitle>TBD COLOUR</Card.Subtitle>
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
              <Button variant='primary' size='sm'>
                -
              </Button>
              <span>{productInCart.count}</span>
              <Button variant='primary' size='sm'>
                +
              </Button>
            </Col>
            <Col>
              <Button type='button'>TBD Remove</Button>
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
