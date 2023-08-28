import { useDispatch } from "react-redux";
import styles from "./OptionList.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../features/authSlice";

const OptionList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles["wrapper"]}>
      <Link to={"/user/data"}>My Account</Link>
      <Link to={"/user/orders"}>My Orders</Link>
      <Link to={"/user/reviews"}>My Reviews</Link>
      {/* <Link to={"/user/saved"}>Saved Items</Link> */}
      <p onClick={logOutHandler}>Log Out</p>
    </div>
  );
};

export default OptionList;
