import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    updateCart: (state, action) => {
      let found = false;

      state.cart.forEach((p) => {
        if (p.id === action.payload.id) {
          found = true;
          p.qty++;
        }
      });

      if (!found) {
        state.cart = [...state.cart, { ...action.payload, qty: 1 }];
      }
    },

    increment: (state, action) => {
      state.cart.forEach((p) => {
        if (p.id === action.payload.id) {
          p.qty++;
        }
      });
    },

    decrement: (state, action) => {
      state.cart.forEach((p) => {
        if (p.id === action.payload.id) {
          p.qty--;
        }
      });
    },

    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;

export const cartSelector = (state) => state.cartReducer;
