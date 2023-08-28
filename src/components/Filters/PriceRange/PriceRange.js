import { useState } from "react";
import styles from "./PriceRange.module.css";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";

const PriceRange = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [formData, setFormData] = useState({
    minValue: "0",
    maxValue: "99999",
  });

  const onChangeHandler = (e) => {
    if (Number(e.target.value) > 0 && Number(e.target.value) < 99999) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    // if(Number(e.target.value) == 0 && e.target.value.length == 1){
    //   setFormData((prevState) => ({
    //     ...prevState,
    //   }));
    // }
    if (e.target.value.length == 0) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: "",
      }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("s")

    if (Number(formData.minValue) == 0) {
      setFormData((prevState) => ({ ...prevState, ["minValue"]: "0" }));
    }
    if (Number(formData.maxValue) == 0) {
      setFormData((prevState) => ({ ...prevState, ["maxValue"]: "0" }));
    }
    if (Number(formData.minValue) > Number(formData.maxValue)) {
      toast.error("The minimum value must be greater than the maximum value");
      setFormData((prevState) => ({ ...prevState, ["minValue"]: 0 }));
    } else {
      if (queryParams.get("priceRange")) queryParams.delete("priceRange");
      queryParams.append(
        "priceRange",
        `${formData.minValue}-${formData.maxValue}`
      );
      setQueryParams(queryParams);
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <header>
        <h2>Price Range</h2>
      </header>
      <form className={styles["price-input"]} onSubmit={onSubmitHandler}>
        <div className={styles["field"]}>
          <input
            name="minValue"
            type="number"
            className={styles["input-min"]}
            value={formData.minValue}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles["separator"]}>-</div>
        <div className={styles["field"]}>
          <input
            name="maxValue"
            type="number"
            className={styles["input-min"]}
            value={formData.maxValue}
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit" className={styles["submit_btn"]}>
          OK
        </button>
      </form>
    </div>
  );
};

export default PriceRange;
