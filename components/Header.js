import {  useRef} from "react";
import  Link from 'next/link'
import { FaCartPlus, FaSearch } from "react-icons/fa";
import Router from 'next/router';
import { useAppContext } from "../context/StateProvider";

function Header() {
  const { state , dispatch}= useAppContext();
   const  {basket} = state;

  const getcount = (basket) => {
    let count = 0;
    basket.map((item) => {
      count += item.quantity;
    });
    return count;
  };

  const nameForm = useRef(null);

  const search = () => {
    const q = nameForm.current.value;
    var query = `/search/${q}`;
    Router.push(query)
  };

  return (
    <div className="header"  data-testid="Header">
      <div className="header__top">
        <div className="header__name">
          <Link href="/" className="header__nametext">
            Ecomm
          </Link>
        </div>
        <div className="header__search">
          <label aria-label="Search Box">
            <input
              ref={nameForm}
              name={"search"}
               placeholder="Search for products,brands and more."
              className="header__searchInput"
            ></input>
            <button
              className="header__searchbutton"
              onClick={search}
              aria-label="Search Button"
              type="button"
            >
              <FaSearch />
            </button>
          </label>
        </div>
        <div className="header__options">
          <Link href="/carts" aria-label="Search Icon">
            <a href="cart"><FaCartPlus className="cart__icon" /></a>
          </Link>
          <p className="header__basketCount" aria-label="Cart Count">{basket ? getcount(basket) : 0}</p>
        </div>
      </div>
      <div className="header__nav">
        {/* <Navbar /> */}
      </div>
    </div>
  );
}

export default Header;
