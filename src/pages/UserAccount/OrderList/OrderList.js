import { useSelector } from "react-redux";
import { useGetUserOrdersQuery } from "../../../features/ordersApiSlice";
import styles from "./OrderList.module.css";
import Order from "./Order";
import { Fragment } from "react";

const OrderList = () => {
  const { user } = useSelector((slice) => slice.auth);
  const { data, isLoading } = useGetUserOrdersQuery(user.userId);

  if (!isLoading) {
    if (data.length > 0) {
      return (
        <div className={styles.wrapper}>
          <h2>My Orders</h2>
          {data.map((o) => (
            <Order o={o} />
          ))}
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <h2>My Orders</h2>
          <div className={styles["null"]}>
            <p>There are no orders yet</p>
          </div>
        </div>
      );
    }
  }
};

export default OrderList;
