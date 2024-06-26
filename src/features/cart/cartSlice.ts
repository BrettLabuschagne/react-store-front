import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const item = state.items.find((item) => item.product.id === action.payload.product.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },
    removeOneFromCart: (state, action: PayloadAction<{ product: Product }>) => {
      const item = state.items.find((item) => item.product.id === action.payload.product.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.product.id !== action.payload.product.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } = cartSlice.actions;

export default cartSlice.reducer;
