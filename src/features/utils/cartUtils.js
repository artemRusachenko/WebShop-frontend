export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  state.totalPrice = addDecimal(
    state.cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  state.totalAmount = state.cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
