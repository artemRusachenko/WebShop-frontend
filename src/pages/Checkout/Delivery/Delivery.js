import { Fragment } from "react";
import styles from "./Delivery.module.css";

const Delivery = ({setIsSubmit}) => {
  return (
    <Fragment>
      <h2>Delivery</h2>
      <div className={styles["delivery"]}>
        <fieldset className={styles["fieldset"]}>
          <legend>Сhoose a method convenient for you </legend>
          <div>
            <input
              type="radio"
              id="shop"
              name="delivery"
              value="Pickup from our stores"
            />
            <label htmlFor="shop">Pickup from our stores</label>
          </div>
          <div>
            <input
              type="radio"
              id="post office"
              name="delivery"
              value="Select a post office"
            />
            <label htmlFor="shop">Select a post office</label>
            {true && (
              <Fragment>
                <select className={styles["select"]}>
                  <option value="1">№1, вул. Пирогівський шлях, 135</option>
                  <option value="2">№2, вул. Богатирська, 11</option>
                </select>
              </Fragment>
            )}
          </div>
        </fieldset>
      </div>
      {/* <select className={styles["select"]}>
        <option value="1">№1, вул. Пирогівський шлях, 135</option>
        <option value="2">№2, вул. Богатирська, 11</option>
      </select> */}
    </Fragment>
  );
};

export default Delivery;
