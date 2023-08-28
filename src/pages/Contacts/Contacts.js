import { Fragment } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles["main-div"]}>
      <Fragment>
        <h1 className={styles.h1}>Our shops</h1>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4147.599734516178!2d30.49062170712!3d50.48872988396238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce16a1c8fc9b%3A0xeb7209f274f5f713!2sROZETKA!5e0!3m2!1sru!2sua!4v1670687608172!5m2!1sru!2sua"
        ></iframe>
      </Fragment>
      <h2>Work schedule</h2>
      <ul>
        <li>Monday-Friday: 10:00-18:00</li>
        <li>Saturday-Sunday: Day off</li>
      </ul>
      <h2>Contacts</h2>
      <ul>
        <li>+380 63 313 8288</li>
        <li>+380 67 921 0030</li>
      </ul>
    </div>
  );
};

export default Contacts;
