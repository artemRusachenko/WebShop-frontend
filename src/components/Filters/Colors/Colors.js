import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Filter.module.css"

const Colors = ({ data }) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [checkedState, setCheckedState] = useState();

  useEffect(() => {
    setCheckedState(new Array(data?.length).fill(false));
  },[]); //[data]

  const onChangeHandler = (position) => {
    const updatedState = checkedState.map((item, index) =>
      position === index ? !item : item
    );

    setCheckedState(updatedState);

    let colorsIds = updatedState.reduce((ids, state, index) => {
      if (state) return ids + `${data[index].id},`;
      else return ids;
    }, "");

    colorsIds = colorsIds.slice(0, -1);
    if (colorsIds) {
      if (queryParams.get("colors")) queryParams.delete("colors");
      queryParams.append("colors", colorsIds);
      setQueryParams(queryParams);
    } else {
      queryParams.delete("colors");
      setQueryParams(queryParams);
    }
  };
  return (
    <div className={styles["wrapper"]}>
      <h3>Colors</h3>
      {data.map((b, index) => (
        <div key={b.id}>
          <input className={styles["checkbox"]} type="checkbox" onChange={() => onChangeHandler(index)} />
          {b.name}
        </div>
      ))}
    </div>
  );
};

export default Colors;
