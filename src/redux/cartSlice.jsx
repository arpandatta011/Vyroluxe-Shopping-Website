import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
