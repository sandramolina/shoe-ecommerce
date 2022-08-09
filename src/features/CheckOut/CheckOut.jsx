import React from 'react';

import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Trash } from 'react-bootstrap-icons';

import './CheckOut.css';
import { Card } from 'react-bootstrap';

const CheckOut = () => {
  const productsInCart = useSelector((state) => state.cart.items);

  const getSubtotal = (price, quantity) => price * quantity;

  const totalCart = productsInCart.reduce(
    (runninTotal, currentCartItem) =>
      runninTotal +
      currentCartItem.product.price.amount * currentCartItem.count,
    0
  );

  const getTax = (purchase) => Math.round(purchase * 0.2);

  const productsInCartRows = productsInCart.map((productInCart, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>
        <ul>
          <li>Model: {productInCart.product.title}</li>
          <li>Code: {productInCart.product.productCode}</li>
          <li>Size: {productInCart.size}</li>
          <li>Colour: {productInCart.colour}</li>
        </ul>
      </td>
      <td>
        {productInCart.product.price.currencyUnit.symbol}{' '}
        {productInCart.product.price.amount}
      </td>
      <td>
        <Button variant='success' size='sm'>
          -
        </Button>
        <span id='count-number'>{productInCart.count}</span>
        <Button variant='success' size='sm'>
          +
        </Button>
      </td>
      <td>
        £ {getSubtotal(productInCart.product.price.amount, productInCart.count)}
      </td>
      <td>
        {' '}
        <Button type='button' variant='success' id='remove-button'>
          <Trash size={15} />
        </Button>
      </td>
    </tr>
  ));

  return (
    <div className='checkout-container'>
      <h4>{productsInCart.length} items to checkout</h4>
      <Table responsive='sm' hover>
        <thead>
          <tr>
            <th>#</th>
            <th id='prod-details-column'>Product Details</th>
            <th id='unit-price-col'>Unit Price</th>
            <th id='quantity-col'>Quantity</th>
            <th id='total-col'>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{productsInCartRows}</tbody>
      </Table>

      <Form id='discount-form'>
        <Form.Group className='mb-3'>
          <Form.Control
            id='input-promo-code'
            type='text'
            placeholder='Enter here your promo code'
          />
        </Form.Group>
        <Button variant='success' type='submit' id='apply-code-btn'>
          Apply
        </Button>
      </Form>

      <Card id='summary-purchase'>
        <Card.Body>
          <Card.Header>Order Summary</Card.Header>
          <Card.Title>
            {productsInCart.length} items: £{totalCart}
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Delivery £ 3.50
          </Card.Subtitle>
          <Card.Subtitle className='mb-2 text-muted'>
            Discount -£ 0.00
          </Card.Subtitle>
          <hr />
          <Card.Title>Total to pay: £ {totalCart + 3.5}</Card.Title>
          (inclusive of tax £ {getTax(totalCart)})
        </Card.Body>
      </Card>

      <Form id='billings-shipping-info'>
        <h4>Billings and Shipping Information</h4>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>
            Email Address<span>*</span>
          </Form.Label>
          <Form.Control type='email' placeholder='name@example.com' required />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            Full Name<span>*</span>
          </Form.Label>
          <Form.Control required type='text' placeholder='Full Name' />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CheckOut;
