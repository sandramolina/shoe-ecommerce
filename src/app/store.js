import { configureStore } from '@reduxjs/toolkit';
import productsState from '../features/Product/ProductSlice';
import cartIsOpen from '../features/Cart/CartModal/CartModalSlice';
import cart from '../features/Cart/CartItemSlice';

export const store = configureStore({
  reducer: { productsState, cartIsOpen, cart },
});

export default store;
