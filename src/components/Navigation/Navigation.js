import styles from "./Navigation.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { logout } from "../../features/authSlice";
import CartButton from "./CartButton/CartButton";
import Cart from "../Cart/Cart";
import Modal from "../shered/Modal/Modal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Navigation = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isAuthInVisible, setIsAuthInVisible] = useState(false);

  const { user, isSignInModal } = useSelector((slice) => slice.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Fragment>
      <div className={styles.header}>
        <Link to={"/"} className={styles.logo}>
          Electronics store
        </Link>

        <nav className={styles.nav}>
          <Link className={styles.nav__link} to={"/search"}>
            Shop
          </Link>
          <Link className={styles.nav__link} to={"/contacts"}>
            Contacts
          </Link>

          <CartButton onShow={() => setIsCartVisible(true)} />

          {isCartVisible && (
            <Modal onHide={() => setIsCartVisible(false)}>
              <Cart onHide={() => setIsCartVisible(false)} />
            </Modal>
          )}

          <div className={styles.auth}>
            {user ? (
              <Link to={"/user/data"}>
                <FaRegUserCircle className={styles.button} />
              </Link>
            ) : (
              <IoMdLogIn
                className={styles.button}
                onClick={() => setIsAuthInVisible(true)}
              />
            )}

            {isAuthInVisible && (
              <Modal onHide={() => setIsAuthInVisible(false)}>
                {isSignInModal ? (
                  <SignIn onHide={() => setIsAuthInVisible(false)} />
                ) : (
                  <SignUp onHide={() => setIsAuthInVisible(false)} />
                )}
              </Modal>
            )}

            {user && (
              <IoMdLogOut className={styles.button} onClick={signOutHandler} />
            )}
          </div>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
