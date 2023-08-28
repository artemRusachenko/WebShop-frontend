import { Fragment, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Input from "../shered/Input/Input";
import styles from "./SignUp.module.css";
import Spinner from "../shered/Spinner/Spinner";
import { useSignUpMutation } from "../../features/usersApiSlice";
import { setCredantials, setIsSignInModal } from "../../features/authSlice";
const SignUp = ({ onHide }) => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const changeDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (password === password2 && password !== "") {
      try {
        const newUser = { name, email, password };
        const res = await signUp(newUser).unwrap();
        dispatch(setCredantials(res));
        onHide();
      } catch (error) {
        toast.error(error.data);
      }
    } else {
      toast.error("Password don't match");
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <Fragment>
      <section>
        <h1 className={styles["h1"]}>Sign Up</h1>
      </section>
      <section>
        <form className={styles["form"]} onSubmit={submitHandler}>
          <div className={styles["div"]}>
            <label className={styles["label"]}>Name</label>
            <Input
              type="text"
              name="name"
              style={styles.input}
              isSubmit={isSubmit}
              value={formData.name}
              func={changeDataHandler}
            />
          </div>
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
          <div className={styles["div"]}>
            <label className={styles["label"]}>Repeat the password</label>
            <Input
              type="password"
              name="password2"
              style={styles.input}
              isSubmit={isSubmit}
              value={formData.password2}
              func={changeDataHandler}
            />
          </div>
          <button type="Submit" className={styles["button"]}>
            Sign Up
          </button>
        </form>
        <button
          className={styles["change_btn"]}
          onClick={() => dispatch(setIsSignInModal())}
        >
          I have an account
        </button>
      </section>
    </Fragment>
  );
};

export default SignUp;
