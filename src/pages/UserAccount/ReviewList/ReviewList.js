import styles from "./ReviewList.module.css";
import { useGetUserReviewsQuery } from "../../../features/reviewsApiSlice";
import { useSelector } from "react-redux";
import ProductReviews from "../../ProductItem/ProductReviews/ProductReviews";

const ReviewList = () => {
  const { user } = useSelector((slice) => slice.auth);
  const { data, isLoading } = useGetUserReviewsQuery(user.userId);

  console.log(data);

  if (!isLoading) {
    return (
      <div className={styles["wrapper"]}>
        <ProductReviews reviews={data} isProductItem={false} />
      </div>
    );
  }
};

export default ReviewList;
