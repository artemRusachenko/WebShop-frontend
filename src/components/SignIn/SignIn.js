import { useState, useContext, Fragment } from "react";
import styles from "./SignIn.module.css";
// import CartContext from "../../context/cart-context";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Input from "../shered/Input/Input";
import { useSignInMutation } from "../../features/usersApiSlice";
import { setCredantials, setIsSignInModal } from "../../features/authSlice";

const SignIn = ({ onHide }) => {
  // const context = useContext(CartContext);
  const dispatch = useDispatch();
  const [signIn, { isLoading }] = useSignInMutation();

  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmit(true);
    if (formData.password !== "" && formData.email !== "") {
      try {
        const res = await signIn(formData).unwrap();
        dispatch(setCredantials(res));
        onHide();
      } catch (error) {
        toast.error(error.data);
      }
    } else {
      toast.error("Password or email don't correct");
    }
  };

  return (
    <Fragment>
      <section>
        <h1 className={styles["h1"]}>Sign In</h1>
      </section>
      <section>
        <form className={styles["form"]} onSubmit={submitHandler}>
          <div className={styles["div"]}>
            <label className={styles["label"]}>E-mail</label>
            <Input
              type="email"
              name="email"
              style={styles.input}
              isSubmit={isSubmit}
              value={formData.email}
              func={changeDataHandler}
            />
          </div>
          <div className={styles["div"]}>
            <label className={styles["label"]}>Password</label>
            <Input
              type="password"
              name="password"
              style={styles.input}
              isSubmit={isSubmit}
              value={formData.password}
              func={changeDataHandler}
            />
          </div>

          <button className={styles["button"]} type="Submit">
            SignIn
          </button>
        </form>
        <button
          disabled={isLoading}
          className={styles["change_btn"]}
          onClick={() => dispatch(setIsSignInModal())}
        >
          I don't  have an account
        </button>
      </section>
    </Fragment>
  );
};

export default SignIn;
