import { Fragment } from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = (props) => {
  return (
    <Fragment>
      <div className={styles.modal}>
        <button onClick={props.onHide} className={styles["button"]}>
          X
        </button>
        {props.children}
      </div>
      ;
    </Fragment>
  );
};

export default ModalWindow;
