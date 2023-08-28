import { Fragment, useState } from "react";
import styles from "./ProductItemImages.module.css";

const ProductItemImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className={styles.wrapper}>
      <div className={styles["box"]}>
        <img
          className={styles.selected__img}
          src={"../../../assets/images/" + selectedImage}
        />
      </div>
      <div className={styles.img__list}>
        {images.map((i) => (
          <div
            className={
              selectedImage !== i ? styles["box_1"] : styles["box_1_selected"]
            }
            onClick={() => setSelectedImage(i)}
          >
            <img
              key={i}
              // className={styles.img}
              className={selectedImage === i ? styles.img__1 : styles.img}
              src={"../../../assets/images/" + i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItemImages;
