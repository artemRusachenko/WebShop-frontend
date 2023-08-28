import Arrow from "../shered/Arrow/Arrow";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow myStyles={{ right: "10px", fontSize: "40px" }} arrow={<HiOutlineArrowSmRight/>}/>,
  prevArrow: <Arrow myStyles={{ left: "10px", fontSize: "40px" }} arrow={<HiOutlineArrowSmLeft/>}/>,
};
