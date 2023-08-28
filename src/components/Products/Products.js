import PromoText from "../PromoText/PromoText";
import ProductList from "./ProductList/ProductList";
import { Fragment } from "react";
import styles from "./Products.module.css";
import Filters from "../../components/Filters/Filters";
import CategoryList from "../CategoryList/CategoryList";
import Sorting from "./Sorting/Sorting";

const Products = () => {
  return (
    <Fragment>
      <div className={styles["header-image"]}>
        <img src="assets/images/header.jpeg" alt="Autumn" />
      </div>
      <PromoText />
      <CategoryList />
      <Sorting />
      <div className={styles["wrapper"]}>
        <Filters />
        <ProductList />
      </div>
    </Fragment>
  );
};

export default Products;
