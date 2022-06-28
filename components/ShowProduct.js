import { useAppContext } from "../context/StateProvider";
import Image from 'next/image'
import  Link from 'next/link'

const ShowProduct = ({ product }) => {
    const {state, dispatch} = useAppContext();
  
    const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: product._id,
          title: product.title,
          price: product.price,
          image: product.images,
        },
      });
    };
  
    return (
      <>
       
        <div className="product" key={product._id}>
            <Link href={`/product/${product._id}`}>
          <Image className="product__image" src={product.images}  alt="" width="80%" height="40%" layout="responsive" objectFit="contain"/>
          </Link>
          <h4 className="product__title">{product.title}</h4>
          <p className="product__price">{product.price}</p>
         
          <button onClick={addToBasket} className="product__button">
            Add to Basket
          </button>
        </div>
        </>
       
    );
  };
  
  export default ShowProduct;
  