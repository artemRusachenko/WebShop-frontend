import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "./utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartProducts: [], totalPrice: 0, totalAmount: 0};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existProduct = state.cartProducts.find((p) => p.id === product.id);

      if (existProduct) {
        state.cartProducts = state.cartProducts.map((p) =>
          p.id === existProduct.id ? { ...p, quantity: ++p.quantity } : p
        );
      } else {
        state.cartProducts = [...state.cartProducts, product];
      }

      return updateCart(state);
    },
    decreaseAmount: (state, action) => {
      const existProduct = state.cartProducts.find(
        (p) => p.id === action.payload
      );

      if (existProduct) {
        state.cartProducts = state.cartProducts.map((p) =>
          p.id === action.payload ? { ...p, quantity: --p.quantity } : p
        );
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (p) => p.id !== action.payload
      );
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartProducts = [];

      return updateCart(state);
    },
  },
});

export const { addToCart, decreaseAmount, removeFromCart, clearCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
