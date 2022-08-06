import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import './Product.css';

const Product = ({ product }) => {
  return (
    <Card style={{ width: '10rem', height: '23rem' }}>
      <Card.Img
        alt={`beautiful representation for the product ${product.title}`}
        className='.img-fluid. max-width: 50%'
        variant='top'
        src={product.images[0]}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Rating: {product.rating.averageRate}</Card.Text>
        <Card.Text>
          {product.price.currencyUnit.symbol} {product.price.amount}
        </Card.Text>
        <div className='card-bottom'>
          <Button
            variant='success'
            className='shop-text'
            as={Link}
            to={`/detailedItem/${product.id}`}
          >
            SHOP
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
