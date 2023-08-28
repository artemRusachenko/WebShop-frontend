import { Fragment, useState, useEffect } from "react";
import styles from "./Payment.module.css";
import Input from "../../../components/shered/Input/Input";

const Payment = ({ setIsFill, isSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const changeDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (
      formData.cardNumber &&
      formData.month &&
      formData.year &&
      formData.cvv
    ) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [formData.cardNumber, formData.month, formData.year, formData.cvv]);
  return (
    <Fragment>
      <h2>Payment</h2>
      <div className={styles["card"]}>
        <div className={styles["card_number"]}>
          <label className={styles["label"]}>Card Number</label>
          <Input
            type="text"
            name="cardNumber"
            style={styles["card_number_input"]}
            isSubmit={isSubmit}
            value={formData.cardNumber}
            func={changeDataHandler}
          />
        </div>
        <div className={styles["card_footer"]}>
          <div>
            <label className={styles["label"]}>Validity</label>
            <div>
              <Input
                type="text"
                name="month"
                style={styles["date_input"]}
                isSubmit={isSubmit}
                value={formData.month}
                func={changeDataHandler}
              />
              <span> / </span>
              <Input
                type="text"
                name="year"
                style={styles["date_input"]}
                isSubmit={isSubmit}
                value={formData.year}
                func={changeDataHandler}
              />
            </div>
          </div>
          <div>
            <label className={styles["label"]}>CVV</label>
            <Input
              type="text"
              name="cvv"
              style={styles["cvv_input"]}
              isSubmit={isSubmit}
              value={formData.cvv}
              func={changeDataHandler}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
