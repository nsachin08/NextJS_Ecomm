import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Data";
import Product from "./Product";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next" aria-label="next scroll">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev" aria-label="previous scroll">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

function Dcards() {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
