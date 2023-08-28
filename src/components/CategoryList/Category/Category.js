import styles from "./Category.module.css";
import SubCategoryList from "../SubCategoryList/SubCategoryList";
import { useNavigate, useSearchParams } from "react-router-dom";

const Category = ({ name, id }) => {
  const navigate = useNavigate();

  const [queryParams, setQueryParams] = useSearchParams();
  const flag = ()  => {
    if (window.location.pathname !== "/search") {
      navigate(`/search?categoryId=${id}`);
    } else {
      setQueryParams({ categoryId: id });
    }
  };

  return (
    <li key={id} className={styles.li}>
      <div className={styles.category}>
        <p onClick={flag}>{name}</p>
        <div className={styles.subCategories}>
          <SubCategoryList parentId={id} className={styles.subCategories} />
        </div>
      </div>
    </li>
  );
};

export default Category;
