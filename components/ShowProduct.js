import { useAppContext } from "../context/StateProvider";
import Image from "next/image";
import Link from "next/link";

const ShowProduct = ({ product }) => {
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
    <>
      <div className="box" data-testid={`product_${product._id}`}>
        <div className="product mtop">
          <div className="img">
            <Link href={`/product/${product._id}`}>
              <div>
                <Image
                  src={product.images}
                  alt=""
                  height={150}
                  width={150}
                  layout="responsive"
                />
              </div>
            </Link>
          </div>
          <div>
            <h3>{product.title}</h3>
            <div className="price">
              <h4>${product.price}.00 </h4>
              <button onClick={addToBasket} aria-label="Add to basket">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
