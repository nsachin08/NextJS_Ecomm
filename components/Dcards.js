import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Data from "./Data";
import Product from "./Product";

function Dcards() {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { productItems } = Data;

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem, index) => {
          return <Product product={productItem} key={index} />;
        })}
      </Slider>
    </>
  );
}

export default Dcards;
