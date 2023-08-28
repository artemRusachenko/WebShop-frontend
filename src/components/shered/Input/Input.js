import styles from "./Input.module.css";

const Input = ({ type, name, style, isSubmit, value, func }) => {
  const onChangeHandler = (e) => {
    func(e);
  };
  return (
    <input
      id={name}
      type={type}
      name={name}
      className={
        isSubmit
          ? `${style} ${value.trim() !== "" ? "" : styles["input_valid"]}`
          : style
      }
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
