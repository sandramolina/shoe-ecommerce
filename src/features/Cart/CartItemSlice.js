import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

export const cartItemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: ({ items }, action) => {
      const foundCartItemIndex = items.findIndex(
        (cartItem) =>
          (cartItem.product.id === action.payload.product.id) &
          (cartItem.stockId === action.payload.stockId)
      );
      if (foundCartItemIndex !== -1) {
        items[foundCartItemIndex].count += 1;
      } else {
        items.push(action.payload);
      }
    },
    removeItemFromCart: (state, action) => {
      const filteredItems = state.items.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.items = filteredItems;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, clearCart, removeItemFromCart } =
  cartItemsSlice.actions;
export default cartItemsSlice.reducer;
