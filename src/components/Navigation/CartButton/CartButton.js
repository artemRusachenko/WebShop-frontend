import CartIcon from "../CartIcon/CartIcon";
import { useSelector } from "react-redux";
import styles from "./CartButton.module.css";

const CartButton = ({ onShow }) => {
  // const amount = context.products.reduce((currentAmount, product) => {
  //   return currentAmount + product.quantity;
  // }, 0)
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className={styles.button} onClick={onShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.count}>{totalAmount}</span>
    </div>
  );
};

export default CartButton;
