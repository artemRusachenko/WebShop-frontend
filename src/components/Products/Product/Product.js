import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cartSlice";
import { Fragment } from "react";

const Product = ({ productData }) => {
  const { id, name, imagesList, price } = productData;

  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);

  const isInCart = cartProducts.some((p) => p.id === id);

  const addToCartHandler = () => {
    const product = {
      ...productData,
      quantity: 1,
    };
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
          <Link to={"/products/" + id}>
            <img
              className={styles.img}
              src={"assets/images/" + imagesList[0]}
              alt="Product"
            />
          </Link>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.buy}>
          <div className={styles.price}>
            <label>Price</label>
            <h4>{price}$</h4>
          </div>
          <Fragment>
            {!isInCart && (
              <button
                onClick={addToCartHandler}
                className={styles["button__add"]}
              >
                Add to Cart
              </button>
            )}
            {isInCart && (
              <button className={styles["button__add"]}>In Cart</button>
            )}
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default Product;
