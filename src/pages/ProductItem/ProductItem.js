import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { useGetProductByIdQuery } from "../../features/productsApiSlice";
import Error from "../Error/Error";
import Spinner from "../../components/shered/Spinner/Spinner";
import styles from "./ProductItem.module.css";
import ProductItemImages from "./ProductItemImages/ProductItemImages";
import ProductReviews from "./ProductReviews/ProductReviews";
import { toast } from "react-toastify";
import { useCreateReviewMutation } from "../../features/reviewsApiSlice";
import { useGetProductReviewsQuery } from "../../features/reviewsApiSlice";

const ProductItem = () => {
  const { productId } = useParams();
  const {
    data: productData,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
  } = useGetProductByIdQuery(productId);
  const {
    data: reviews,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
  } = useGetProductReviewsQuery(productId);

  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [isInCart, setIsInCart] = useState(false);

  const [createReview] = useCreateReviewMutation();

  const [formData, setFormData] = useState({ rating: "", text: "" });

  const addToCartHandler = () => {
    const product = { ...productData, quantity: 1 };
    dispatch(addToCart(product));
    setIsInCart(true);
  };

  const changeDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newReview = {
        text: formData.text,
        rating: formData.rating,
        userId: user.userId,
        productId: productId,
      };
      await createReview(newReview).unwrap();
    } catch (error) {
      toast.error(error.data);
    }
  };

  if (isLoadingProduct || isLoadingReviews) return <Spinner />;
  else if (isErrorProduct || isErrorReviews) return <Error />;
  else {
    return (
      <Fragment>
        <div className={styles["wrapper"]}>
          <div className={styles["images"]}>
            <ProductItemImages images={productData.imagesList} />
          </div>

          <div>
            <h2 className={styles["name"]}>{productData.name}</h2>
            <p className={styles["price"]}>{productData.price}$</p>
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
        <div className={styles["characteristics"]}>
          <h2>Characteristics</h2>
          <p>{productData.description}</p>
        </div>
        <form className={styles["form"]} onSubmit={submitHandler}>
          <div className={styles["box"]}>
            <label className={styles["label"]} >Rating</label>
            <input value={formData.rating} type="number" min="0" max="10" className={styles["input"]} name="rating" onChange={changeDataHandler} />
          </div>
          <div className={styles["box"]}>
            <label className={styles["label"]}>Review</label>
            <textarea className={styles["textarea"]} name="text" onChange={changeDataHandler} />
          </div>
          <button className={styles["button"]} type="Submit">Post</button>
        </form>
        <div className={styles["characteristics"]}>
          <ProductReviews reviews={reviews} isProductItem={true}/>
        </div>
      </Fragment>
    );
  }
};

export default ProductItem;
