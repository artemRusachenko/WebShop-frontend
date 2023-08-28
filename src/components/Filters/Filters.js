import PriceRange from "./PriceRange/PriceRange";
import styles from "./Filters.module.css";
import { useSearchParams } from "react-router-dom";
import { useGetFiteredFiltersQuery } from "../../features/filtersApiSlice";
import Brands from "./Brands/Brands";
import Colors from "./Colors/Colors";

const Filters = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const categoryId = queryParams.get("categoryId");
  const name = queryParams.get("name");
  const subCategoriesId = queryParams.get("subCategoryId");
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
  if (brands != null) {
    query += "brands=" + brands + "&";
  }
  if (colors != null) {
    query += "colors=" + colors + "&";
  }
  if (priceRange != null) {
    query += "priceRange=" + priceRange + "&";
  }

  const { data, isLoading } = useGetFiteredFiltersQuery(query);
  if (!isLoading) {
    return (
      <div className={styles["wrapper"]}>
        <PriceRange />
        <Brands data={data.brands} />
        <Colors data={data.colors} />
      </div>
    );
  }
};

export default Filters;
