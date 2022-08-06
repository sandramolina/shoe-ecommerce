import { configureStore } from '@reduxjs/toolkit';
import productsState from '../features/Product/ProductSlice';

const store = configureStore({
  reducer: { productsState },
});

export default store;
