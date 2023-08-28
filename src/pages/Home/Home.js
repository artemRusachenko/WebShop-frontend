import { Fragment } from "react";
import PopularSlider from "../../components/PopularSlider/PopularSlider";
import PromoSlider from "../../components/PromoSlider/PromoSlider";
import CategoryList from "../../components/CategoryList/CategoryList";

const Home = () => {
  return (
    <Fragment>
      <CategoryList/>
      <PromoSlider />
      <PopularSlider />
    </Fragment>
  );
};
export default Home;
