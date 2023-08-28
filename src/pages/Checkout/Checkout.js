import styles from "./Checkout.module.css";
import Contact from "./Contact/Contact";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../features/ordersApiSlice";
import { clearCartItems } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addOrder = () => {
    const orderItems = cartProducts.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    const order = {
      totalPrice: totalPrice,
      orderItems: orderItems,
      userId: user.userId,
    };
    console.log(order);
    createOrder(order);
    dispatch(clearCartItems());
    navigate("/order-placed");
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const [isFillContact, setIsFillContact] = useState(false);
  //const [isFillDelivery, setIsFillDelivery] = useState(false);
  const [isFillPayment, setIsFillPayment] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(isFillContact, isFillPayment);
    if (isFillContact /*&& isFillDelivery*/ && isFillPayment) {
      addOrder();
    }
  };

  return (
    <form className={styles["form"]} onSubmit={submitFormHandler}>
      <div className={styles["div"]}>
        <div className={styles["div2"]}>
          <Contact
            setIsFill={(res) => setIsFillContact(res)}
            isSubmit={isSubmit}
          />
          {/* <Delivery setIsFill={setIsFillDelivery} isSubmit={isSubmit} /> */}
          <Payment
            setIsFill={(res) => setIsFillPayment(res)}
            isSubmit={isSubmit}
          />
        </div>
        <Orders />
      </div>
      <button className={styles["btn"]}  type="submit">Сonfirm the order</button>
    </form>
  );
};

export default Checkout;
