import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../BannerImages/Banner1.jpg";
import Banner2 from "../BannerImages/Banner2.jpg";
import Banner3 from "../BannerImages/Banner3.jpg";
import Banner4 from "../BannerImages/Banner4.jpg";
import SlideCard from "./SlideCard";

const SlideCards = () => {
  const images = [Banner1, Banner2, Banner3, Banner4];

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => {
          return <SlideCard image={image} key={index} />;
        })}
      </Slider>
    </>
  );
};

export default SlideCards;
