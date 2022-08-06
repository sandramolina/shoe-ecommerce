import { configureStore } from '@reduxjs/toolkit';
import productsState from '../features/Product/ProductSlice';

export const store = configureStore({
  reducer: { productsState },
});

export default store;
