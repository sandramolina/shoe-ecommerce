import React from 'react';

import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
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

  return (
    <div>
      <h4>{productsInCart.length} items in the bag</h4>
      {productsInCartNodes}
      <hr />
      <h3>Total Purchase: £{totalCart}</h3>
    </div>
  );
};

export default Cart;
