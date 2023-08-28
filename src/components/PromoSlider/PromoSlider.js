import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { settings } from "./sliderSettings";
import { promos } from "./promos";

const PromoSlider = () => {
  return (
    <Slider {...settings}>
      {promos.map((promo) => (
        <div key={promo.id}>
          <img src={promo.imageUrl} style={{width: "100%"}}/>
        </div>
      ))}
    </Slider>
  );
};

export default PromoSlider;
