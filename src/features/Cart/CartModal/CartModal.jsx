import React from 'react';

import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { closeCart } from './CartModalSlice';
import Cart from '../Cart';

const CartModal = () => {
  const show = useSelector((state) => state.cartIsOpen.value);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeCart());
  return (
    <Offcanvas show={show} onHide={handleClose} scroll='true'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>YOUR BAG</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Cart />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartModal;
