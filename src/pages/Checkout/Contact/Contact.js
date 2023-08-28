import { Fragment, useEffect, useState } from "react";
import Input from "../../../components/shered/Input/Input";
import styles from "./Contact.module.css";

const Contact = ({ setIsFill, isSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
  });

  const changeDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (formData.name && formData.surname && formData.phoneNumber) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [formData.name, formData.surname, formData.phoneNumber]);

  return (
    <Fragment>
      <h2>Your Contacts</h2>
      <div className={styles["contacts"]}>
        <div className={styles["contact"]}>
          <label className={styles["label"]}>Name</label>
          <Input
            type="text"
            name="name"
            style={styles["input"]}
            isSubmit={isSubmit}
            value={formData.name}
            func={changeDataHandler}
          />
        </div>
        <div className={styles["contact"]}>
          <label className={styles["label"]}>Surname</label>
          <Input
            type="text"
            name="surname"
            style={styles["input"]}
            isSubmit={isSubmit}
            value={formData.surname}
            func={changeDataHandler}
          />
        </div>
        <div className={styles["contact"]}>
          <label className={styles["label"]}>Phone Number</label>
          <Input
            type="text"
            name="phoneNumber"
            style={styles["input"]}
            isSubmit={isSubmit}
            value={formData.phoneNumber}
            func={changeDataHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
