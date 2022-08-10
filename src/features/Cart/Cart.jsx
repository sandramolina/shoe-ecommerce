import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { closeCart } from './CartModal/CartModalSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();

  const productsInCart = useSelector((state) => state.cart.items);

  const productsInCartNodes = productsInCart.map((productInCart, i) => (
    <CartItem productInCart={productInCart} key={i} />
  ));

  const totalCart = productsInCart.reduce(
    (runninTotal, currentCartItem) =>
      runninTotal +
      currentCartItem.product.price.amount * currentCartItem.count,
    0
  );

  const handleCheckOutClick = () => dispatch(closeCart());

  return (
    <div>
      <h4>{productsInCart.length} items in the bag</h4>
      {productsInCartNodes}
      <hr />
      <h3>Total Purchase: £{Math.round(totalCart * 100) / 100}</h3>
      {productsInCart.length !== 0 ? (
        <Button variant='success' onClick={handleCheckOutClick}>
          <Link to='/checkout' id='checkout-link'>
            Checkout
          </Link>
        </Button>
      ) : null}
    </div>
  );
};

export default Cart;
