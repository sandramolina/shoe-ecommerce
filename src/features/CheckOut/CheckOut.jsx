import React from 'react';

import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Trash } from 'react-bootstrap-icons';

import './CheckOut.css';

const CheckOut = () => {
  const productsInCart = useSelector((state) => state.cart.items);

  const getSubtotal = (price, quantity) => price * quantity;

  //   const countTimesPrice =
  //     productInCart.count * productInCart.product.price.amount;

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
    </div>
  );
};

export default CheckOut;
