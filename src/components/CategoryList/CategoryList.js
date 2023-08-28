import { useGetCategoriesByParentIdQuery } from "../../features/categoryApiSlice";
import Error from "../../pages/Error/Error";
import Spinner from "../shered/Spinner/Spinner";
import Category from "./Category/Category";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
  const { data, isLoading, isError } = useGetCategoriesByParentIdQuery(0);

  if (isLoading) return <Spinner />;
  else if (isError) return <Error />;
  else
    return (
      <div className={styles.main}>
        <ul className={styles.ctg}>
          {data.map((c) => (
            <Category
              key={c.id}
              name={c.name}
              id={c.id}
            />
          ))}
        </ul>
      </div>
    );
};

export default CategoryList;
