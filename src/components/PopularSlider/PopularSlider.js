import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import Product from "../Products/Product/Product";
import { settings } from "./sliderSettings";
import { useGetPopularProductsQuery } from "../../features/productsApiSlice";
import Spinner from "../shered/Spinner/Spinner";
import Error from "../../pages/Error/Error";
import { Fragment } from "react";

const PopularSlider = () => {
  const { data, isLoading, isError } = useGetPopularProductsQuery();

  if (isLoading) return <Spinner />;
  else if (isError) return <Error />;
  else {
    return (
      <Fragment>
        <h2>Popular products</h2>
        <Slider {...settings}>
          {data.map((prod) => (
            <Product key={prod.id} productData={prod} />
          ))}
        </Slider>
      </Fragment>
    );
  }
};

export default PopularSlider;
