import { useRef } from "react";
import { useAppContext } from "../context/StateProvider";
import Image from "next/image"

const Cart = ({ product }) => {
  const { state ,dispatch} = useAppContext();
  const {basket} = state;
  const nameForm = useRef(null);

  const deletefromBasket = () => {
    dispatch({
      type: "DELETE_FROM_BASKET",
      item: {
        id: product.id,
      },
    });
  };

  const onChangeBasket = () => {
    dispatch({
      type: "ON_CHANGE_BASKET",
      item: {
        quantity: nameForm.current.value,
        id: product.id,
      },
    });
  };

  return (
    <div className="CART" key={product.id}>
      <div className="cart__image__div">
        <Image src={product.image} className="cart__image" alt="" />
      </div>
      <div className="cart__detail">
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
        <br></br>
        <input
          ref={nameForm}
          type="number"
          min={0}
          defaultValue={product.quantity}
          className="cart_quantity"
        />
        <button onClick={onChangeBasket} className="cart__update">
          Update
        </button>
        <br />
        <button onClick={deletefromBasket} className="cart__delete">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
