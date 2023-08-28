import { useDispatch } from "react-redux";
import styles from "./CartForm.module.css";
import {
  addToCart,
  decreaseAmount,
  removeFromCart,
} from "../../../features/cartSlice";

const CartForm = ({ productData }) => {
  const { id, name, imagesList, price, quantity } = productData;
  const dispatch = useDispatch();

  return (
    <div className={styles["wrapper"]} key={id}>
      <div className={styles["box"]}>
        <img
          className={styles["image"]}
          src={"assets/images/" + imagesList[0]}
        />
      </div>
      <div className={styles["info"]}>
        <div className={styles["info_box"]}>
          <p>{name}</p>
          <p
            className={styles["button__delete"]}
            onClick={() => dispatch(removeFromCart(id))}
          >
            X
          </p>
        </div>

        <div className={styles["bottom"]}>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>{price}$</p>
          <div className={styles["count"]}>
            <button
              className={styles["button"]}
              onClick={() => dispatch(decreaseAmount(id))}
              disabled={quantity === 1}
            >
              -
            </button>
            <span style={{ color: "white" }}>{quantity}</span>
            <button
              className={styles["button"]}
              onClick={() => dispatch(addToCart(productData))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
