import React from 'react';

import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart.items);
  const productsInCartNodes = productsInCart.map((productInCart, i) => (
    <CartItem productInCart={productInCart} key={i} />
  ));
  return <div>{productsInCartNodes}</div>;
};

export default Cart;
