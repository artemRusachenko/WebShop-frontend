import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  // products: [],
  // totalAmount: 0,
  isSignInModal: false,
  productImages: [],
};

const cartReducer = (prevState, action) => {
  const { type, product, productId, productImages } = action;
  const { products, totalAmount } = prevState;

  // if (type === "ADD_PRODUCT") {
  //   const updatedTotalAmount = totalAmount + product.price * product.amount;

  //   const cartProductIndex = products.findIndex(
  //     (prod) => prod.id === product.id
  //   );

  //   const cartProduct = products[cartProductIndex];

  //   let updatedProducts;

  //   if (cartProduct) {
  //     const updatedProduct = {
  //       ...cartProduct,
  //       amount: cartProduct.amount + product.amount,
  //     };
  //     updatedProducts = [...products];
  //     updatedProducts[cartProductIndex] = updatedProduct;
  //   } else {
  //     updatedProducts = products.concat(action.product);
  //   }

  //   return {
  //     products: updatedProducts,
  //     totalAmount: updatedTotalAmount,
  //     isSignInModal: prevState.isSignInModal,
  //   };
  // } else if (type === "REMOVE_PRODUCT") {
  //   const cartIndex = products.findIndex((prod) => prod.id === productId);
  //   const cartProduct = products[cartIndex];
  //   const updatedTotalAmount = totalAmount - cartProduct.price;

  //   let updatedProducts;
  //   if (cartProduct.amount > 1) {
  //     const updatedProduct = {
  //       ...cartProduct,
  //       amount: cartProduct.amount - 1,
  //     };
  //     updatedProducts = [...products];
  //     updatedProducts[cartIndex] = updatedProduct;
  //   } else {
  //     updatedProducts = products.filter((prod) => prod.id !== productId);
  //   }
  //   return {
  //     products: updatedProducts,
  //     totalAmount: updatedTotalAmount,
  //     isSignInModal: prevState.isSignInModal,
  //   };
  //} else 
  // if (action.type === "USER_SIGNIN") {
  //   return {
  //     products: prevState.products,
  //     totalAmount: prevState.totalAmount,
  //     isSignInModal: prevState.isSignInModal,
  //   };
  //} else 
  if (action.type === "CHANGE_AUTH_MODAL") {
    return {
      //products: prevState.products,
      //totalAmount: prevState.totalAmount,
      
      isSignInModal: !prevState.isSignInModal,
    };
  }
  if (action.type === "SHOW_IMAGES_MODAL"){

  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // const addProductHandler = (item) => {
  //   dispatchCartAction({
  //     type: "ADD_PRODUCT",
  //     product: item,
  //   });
  // };

  // const removeProductHandler = (id) => {
  //   dispatchCartAction({
  //     type: "REMOVE_PRODUCT",
  //     productId: id,
  //   });
  // };

  const changeSignInModalHandler = () => {
    dispatchCartAction({
      type: "CHANGE_AUTH_MODAL",
    });
  };

  const cartContext = {
    //products: cartState.products,
    //totalAmount: cartState.totalAmount,
    isSignInModal: cartState.isSignInModal,
    //addProduct: addProductHandler,
    //removeProduct: removeProductHandler,
    changeSignInModal: changeSignInModalHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
