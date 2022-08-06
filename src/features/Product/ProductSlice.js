import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductData = createAsyncThunk(
  'getProductsData',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  isSuccess: false,
  message: '',
  loading: false,
};

export const productsSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    displayAll: (state) => {
      state;
    },
  },
  extraReducers: {
    [getProductData.pending]: (state) => {
      state.loading = true;
    },
    [getProductData.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.isSuccess = true;
    },
    [getProductData.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
  },
});

export const { displayAll } = productsSlice.actions;
export default productsSlice.reducer;
