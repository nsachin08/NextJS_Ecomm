import { useAppContext } from "../context/StateProvider";
import Image from "next/image";
const Product = ({ product }) => {
  const { state, dispatch } = useAppContext();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: product._id,
        title: product.title,
        price: product.price,
        image: product.images,
      },
    });
  };

  return (
    <div className="box" data-testid={`product_${product._id}`}>
      <div className="product mtop">
        <div className="img">
          <img src={product.images} alt="" width="277px" height="270px" />
        </div>
        <div className="product-details">
          <h3>{product.title}</h3>
          <div className="price">
            <h4>${product.price}.00 </h4>
            <button onClick={addToBasket} aria-label="Add Button">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
