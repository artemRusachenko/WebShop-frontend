import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import {
  useGetFilteredProductsQuery,
  useGetTestQuery,
} from "../../../features/productsApiSlice";
import Spinner from "../../shered/Spinner/Spinner";
import Error from "../../../pages/Error/Error";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ProductList = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const categoryId = queryParams.get("categoryId");
  const name = queryParams.get("name");
  const subCategoriesId = queryParams.get("subCategoryId");
  const sortingMethod = queryParams.get("sortingMethod");
  const brands = queryParams.get("brands");
  const colors = queryParams.get("colors");
  const priceRange = queryParams.get("priceRange");


  let query = "";
  if (categoryId !== null) {
    query += "categoryId=" + categoryId + "&";
  }
  if (name !== null) {
    query += "name=" + name + "&";
  }
  if (subCategoriesId != null) {
    query += "subCategoryId=" + subCategoriesId + "&";
  }
  if (sortingMethod != null) {
    query += "sortingMethod=" + sortingMethod + "&";
  }
  if (brands != null) {
    query += "brands=" + brands + "&";
  }
  if (colors != null) {
    query += "colors=" + colors + "&";
  }
  if (priceRange != null) {
    query += "priceRange=" + priceRange + "&";
  }
  
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);

  query += "pageNumber=" + activePage;

  const { data, isLoading } = useGetFilteredProductsQuery(query);

  if (!isLoading) {
    console.log(data);
  }

  useEffect(() => {
    data && setPageCount(data.totalPages);
  }, [data]);

  const handlePageClick = (event) => {
    setActivePage(event.selected + 1);
  };

  if (isLoading) return <Spinner />;
  else if (data.error) return <Error />;
  //else if (data.length === 0) return <div>This Category is Empty</div>;
  else {
    const productList = data.data.map((p) => (
      <Product key={p.id} productData={p} />
    ));
    return (
      <>
        <div className={styles.div}>{productList}</div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
};

export default ProductList;
