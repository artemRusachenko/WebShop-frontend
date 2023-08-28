import { useGetCategoriesByParentIdQuery } from "../../../features/categoryApiSlice";
import Error from "../../../pages/Error/Error";
import Spinner from "../../shered/Spinner/Spinner";
import SubCategory from "../SubCategory";
import styles from "./SubCategoryList.module.css";

const SubCategoryList = ({ parentId }) => {
  const { data, isLoading, isError } =
    useGetCategoriesByParentIdQuery(parentId);

  if (isLoading) return <Spinner />;
  else if (isError) return <Error />;
  else {
    return (
      <div className={styles.subCategories}>
        <ul className={styles.ul}>
          {data.map((sc) => (
            <SubCategory key={sc.id} name={sc.name} id={sc.id} />
          ))}
        </ul>
      </div>
    );
  }
};

export default SubCategoryList;
