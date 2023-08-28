import styles from "./Sorting.module.css";
import { useSearchParams } from "react-router-dom";

const Sorting = () => {
  const [queryParams, setQueryParams] = useSearchParams();

  const onChangeHandler = (e) => {
    if (queryParams.get("sortingMethod")) queryParams.delete("sortingMethod");
    queryParams.append("sortingMethod", e.target.value);
    setQueryParams(queryParams);
  };

  return (
    <div className={styles["div"]}>
      <select
        name="methods"
        onChange={onChangeHandler}
        className={styles.select}
      >
        <option value="BestSellers">Best selllers</option>
        <option value="HighToLow">Price: High To Low</option>
        <option value="LowToHigh">Price: Low To High</option>
      </select>
    </div>
  );
};

export default Sorting;
