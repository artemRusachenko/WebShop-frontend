import styles from "./ModalBackground.module.css";

const ModalBackground = ({ onHide }) => {
  return <div className={styles["background"]} onClick={onHide}></div>;
};

export default ModalBackground;
