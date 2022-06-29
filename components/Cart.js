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
      <div className="cart__image">
        <Image src={product.image}  alt="" width="100%" height="100%"  objectFit="contain"/>
        </div>
      <div className="cart__detail">
        <h3>{product.title}</h3>
        <h5>{product.price}</h5>
        <label aria-label="Update box">
        <input
          ref={nameForm}
          type="number"
          min={0}
          defaultValue={product.quantity}
          className="cart_quantity"

        />
        </label>
        <button onClick={onChangeBasket} className="cart__update" aria-label="Update Button">
          Update
        </button>
        <br />
        <button onClick={deletefromBasket} className="cart__delete" aria-label="Remove Button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
