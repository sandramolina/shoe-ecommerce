import { configureStore } from '@reduxjs/toolkit';
import productsState from '../features/Product/ProductSlice';
import cartIsOpen from '../features/Cart/CartModal/CartModalSlice';

export const store = configureStore({
  reducer: { productsState, cartIsOpen },
});

export default store;
