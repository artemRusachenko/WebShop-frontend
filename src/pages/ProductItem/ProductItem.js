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

// const Data = [
//   {
//     id: "1",
//     name: "Iphone XR",
//     image: "images/xr.jpg",
//     price: "23000",
//     description:
//       "SIM + eSIM/nScreen: 6,1\nIPS 1792x828\nMemory: 64 GB\nRAM: 3 GB\nprocessor: Apple A12 Bionic\nОS: iOS\nbattery: 2942 мАг\ncamera: 12 (f / 1.9) Mp",
//   },
//   {
//     id: "2",
//     name: "Samsung Galaxy S20",
//     image: "images/sumsung.jpg",
//     price: "20000",
//     description:
//       "SIM + SIM or memory card\nscreen: 6,5\nSuper AMOLED\n2400x1080\nmemory: 128 GB\nRAM: 6 GB\nprocessor: Qualcomm Snapdragon 865 + Adreno 650\nOS: Android 10\nbattery: 4500 мАh\ncamera: 12 (f / 1.8) + 12 (f / 2.2) + 8 (f / 2.4) MP",
//   },
//   {
//     id: "3",
//     name: "Apple AirPods 2",
//     image: "images/airpods.jpg",
//     price: "5000",
//     description:
//       "Vacuum and liners\nWork time: until 5 o'clock\nbluetooth 5.0",
//   },
//   {
//     id: "4",
//     name: "Iphone XR",
//     image: "images/xr.jpg",
//     price: "23000",
//     description:
//       "SIM + eSIM/nScreen: 6,1\nIPS 1792x828\nMemory: 64 GB\nRAM: 3 GB\nprocessor: Apple A12 Bionic\nОS: iOS\nbattery: 2942 мАг\ncamera: 12 (f / 1.9) Mp",
//   },
//   {
//     id: "5",
//     name: "Samsung Galaxy S20",
//     image: "images/sumsung.jpg",
//     price: "20000",
//     description:
//       "SIM + SIM or memory card\nscreen: 6,5\nSuper AMOLED\n2400x1080\nmemory: 128 GB\nRAM: 6 GB\nprocessor: Qualcomm Snapdragon 865 + Adreno 650\nOS: Android 10\nbattery: 4500 мАh\ncamera: 12 (f / 1.8) + 12 (f / 2.2) + 8 (f / 2.4) MP",
//   },
//   {
//     id: "6",
//     name: "Apple AirPods 2",
//     image: "images/airpods.jpg",
//     price: "5000",
//     description:
//       "Vacuum and liners\nWork time: until 5 o'clock\nbluetooth 5.0",
//   },
//   {
//     id: "7",
//     name: "Iphone XR",
//     image: "images/xr.jpg",
//     price: "23000",
//     description:
//       "SIM + eSIM/nScreen: 6,1\nIPS 1792x828\nMemory: 64 GB\nRAM: 3 GB\nprocessor: Apple A12 Bionic\nОS: iOS\nbattery: 2942 мАг\ncamera: 12 (f / 1.9) Mp",
//   },
//   {
//     id: "8",
//     name: "Samsung Galaxy S20",
//     image: "images/sumsung.jpg",
//     price: "20000",
//     description:
//       "SIM + SIM or memory card\nscreen: 6,5\nSuper AMOLED\n2400x1080\nmemory: 128 GB\nRAM: 6 GB\nprocessor: Qualcomm Snapdragon 865 + Adreno 650\nOS: Android 10\nbattery: 4500 мАh\ncamera: 12 (f / 1.8) + 12 (f / 2.2) + 8 (f / 2.4) MP",
//   },
//   {
//     id: "9",
//     name: "Apple AirPods 2",
//     image: "images/airpods.jpg",
//     price: "5000",
//     description:
//       "Vacuum and liners\nWork time: until 5 o'clock\nbluetooth 5.0",
//   },
// ];

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
  //const isInCart = cartProducts.some((p) => p.id === productId);

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
