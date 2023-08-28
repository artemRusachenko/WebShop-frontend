import CheckoutItem from "./CheckoutItem";
import styles from "./Orders.module.css";
import { useSelector } from "react-redux";

const Orders = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);
  const cartItems = cartProducts.map((item) => (
    <CheckoutItem
      key={item.id}
      name={item.name}
      image={"assets/images/" + item.imagesList[0]}
      price={item.price}
      quantity={item.quantity}
    />
  ));

  return (
    <div className={styles["main_div"]}>
      <h2>Orders</h2>
      <div className={styles["box"]}>{cartItems}</div>
      {/* <div className={styles["total_price"]}> */}
        {/* <hr /> */}
        <h2 className={styles["total_price"]}>{totalPrice}$</h2>
      {/* </div> */}
    </div>
  );
};

export default Orders;
