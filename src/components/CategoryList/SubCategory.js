import { useNavigate, useSearchParams } from "react-router-dom";

const SubCategory = ({ name, id }) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const navigate = useNavigate();

  const flag = () => {
    // const ids = queryParams.get("subCategoriesId");
    // if (ids !== null) {
    //   const newIds = ids + "," + id;
    //   setQueryParams({ subCategoriesId: newIds });
    // } else {
    //setQueryParams({ subCategoriesId: id });
    //}
    if (window.location.pathname !== "/search") {
      navigate(`/search?subCategoryId=${id}`);
      // navigate("/search")
      //setQueryParams({ categoryId: id });
    } else {
      setQueryParams({ subCategoryId: id });
    }
  };

  return (
    <li key={id}>
      <div>
        <p onClick={flag}>{name}</p>
      </div>
    </li>
  );
};

export default SubCategory;
