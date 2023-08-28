import styles from "./CheckoutItem.module.css";

const CheckoutItem = ({ name, image, price, quantity }) => {
  return (
    <div className={styles["div"]}>
      <div className={styles["box"]}>
        <img className={styles["img"]} src={image} />
      </div>
      <div className={styles["info"]}>
        <div className={styles["properties"]}>
          <label className={styles["label"]}>Name</label>
          <p>{name}</p>
        </div>
        <div className={styles["properties"]}>
          <label className={styles["label"]}>Price</label>
          <p>{price}</p>
        </div>
        <div className={styles["properties"]}>
          <label className={styles["label"]}>Quantity</label>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
