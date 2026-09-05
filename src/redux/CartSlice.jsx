import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name: item.name,
          image: item.image,
          cost: item.cost,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          state.items = state.items.filter(
            (item) => item.name !== name
          );
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;