import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartForm from "./CartForm/CartForm";

const Cart = ({ onHide }) => {
  const { totalPrice, cartProducts } = useSelector((slice) => slice.cart);
  const cartItems = cartProducts.map((p) => (
    <CartForm key={p.id} productData={p} />
  ));

  return (
    <Fragment>
      <div>{cartItems}</div>
      <div className={styles.footer}>
        <button onClick={onHide} className={styles.button__cancel}>
          Cancel
        </button>
        <div className={styles.div}>
          <p style={{"color": "white"}}>{totalPrice} ₴</p>
          <Link to={"/checkout"}>
            <button disabled={!cartItems.length} onClick={onHide} className={styles.button__checkout}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
