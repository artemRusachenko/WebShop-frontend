import CheckoutItem from "../../Checkout/Orders/CheckoutItem";
import styles from "./Order.module.css"
import { useState } from "react";


const Order = ({o}) => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  return (
    <div className={styles["order"]}>
      <div key={o.id}>
        <div className={styles["info"]}>
          <div className={styles["box"]}>
            <label>Total Price </label>
            <p>{o.totalPrice}</p>
          </div>
          <div className={styles["box"]}>
            <label>Status</label>
            <p> {o.stateInfo}</p>
          </div>
          <div className={styles["box"]}>
            <label>Creation date</label>
            <p> {o.creationDate}</p>
          </div>
          <button
            className={styles["btn"]}
            onClick={() => setIsShowDetails(!isShowDetails)}
          >
            {isShowDetails ? "🡡" : "🡣"}
          </button>
        </div>
        <div className={isShowDetails ? styles["show"] : styles["hide"]}>
          {o.orderItems.map((i) => (
            <CheckoutItem
              key={i.id}
              name={i.product.name}
              image={"../assets/images/" + i.product.imagesList[0]}
              price={i.product.price}
              quantity={i.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
