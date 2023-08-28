import { Fragment } from "react";
import styles from "./ProductReviews.module.css";

const ProductReviews = ({ reviews, isProductItem }) => {
  if (reviews.length > 0) {
    return (
      <Fragment>
        <h2>Reviews</h2>
        {reviews.map((r) => (
          <div key={r.id} className={styles["wrapper"]}>
            <div className={styles["box"]}>
              <p className={styles["name"]}>{r.userName}</p>
              <p className={styles["date"]}>{r.creationDate}</p>
            </div>
            {!isProductItem && <p className={styles["rating"]}>Product name: {r.productName}</p>}
            <p className={styles["rating"]}>Rating: {r.rating}/10</p>
            <p className={styles["review"]}>{r.text}</p>
          </div>
        ))}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h2>Reviews</h2>
        <div className={styles["null"]}>
          <p>There are no reviews yet</p>
        </div>
      </Fragment>
    );
  }
};
export default ProductReviews;
