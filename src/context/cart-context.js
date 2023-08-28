import React from "react";

const CartContext = React.createContext({
  isSignInModal: false,
  changeSignInModal: () => {},
  // products: [],
  // totalAmount: 0,
  // addProduct: (product) => {},
  // removeProduct: (id) => {},
});

export default CartContext;
