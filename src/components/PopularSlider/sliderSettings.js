import Arrow from "../shered/Arrow/Arrow";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export const settings = {
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  nextArrow: (
    <Arrow myStyles={{ right: "5px", fontSize: "30px"}} arrow={<HiOutlineArrowSmRight />} />
  ),
  prevArrow: (
    <Arrow myStyles={{ left: "5px", fontSize: "30px" }} arrow={<HiOutlineArrowSmLeft />} />
  ),
};
