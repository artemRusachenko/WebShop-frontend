import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Filter.module.css";

const Brands = ({ data }) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [checkedState, setCheckedState] = useState();

  useEffect(() => {
    setCheckedState(new Array(data?.length).fill(false));
  }, []);

  const onChangeHandler = (position) => {
    const updatedState = checkedState.map((item, index) =>
      position === index ? !item : item
    );

    setCheckedState(updatedState);

    let brandIds = updatedState.reduce((ids, state, index) => {
      if (state) return ids + `${data[index].id},`;
      else return ids;
    }, "");

    brandIds = brandIds.slice(0, -1);

    if (brandIds) {
      if (queryParams.get("brands")) queryParams.delete("brands");
      queryParams.append("brands", brandIds);
      setQueryParams(queryParams);
    } else {
      queryParams.delete("brands");
      setQueryParams(queryParams);
    }
  };
  return (
    <div className={styles["wrapper"]}>
      <h3>Brands</h3>
      {data.map((b, index) => (
        <div key={b.id}>
          <input
            className={styles["checkbox"]}
            type="checkbox"
            onChange={() => onChangeHandler(index)}
          />
          {b.name}
        </div>
      ))}
    </div>
  );
};

export default Brands;
