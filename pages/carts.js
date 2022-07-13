import Cart from "../components/Cart";
import { useAppContext } from "../context/StateProvider";

const Carts = () => {
  const { state, dispatch } = useAppContext();
  const { basket } = state;

  const totalcount = (basket) => {
    let count = 0;
    basket.map((item) => {
      count += item.quantity * item.price;
    });
    return count;
  };

  return (
    <>
      <section className="cart-items">
        <div className="cart__window">
          <div className="Cart_Items">
            {basket.map((product, index) => {
              return <Cart product={product} key={index} />;
            })}
          </div>
          <div className="cart-total product">
            <h2>Checkout</h2>
            <div className="d_flex">
              <h4>Total Price :</h4>
              <h3>${totalcount(basket)}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carts;
