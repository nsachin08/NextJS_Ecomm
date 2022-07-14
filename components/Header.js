import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import Router from "next/router";
import { useAppContext } from "../context/StateProvider";

function Header() {
  const { state, dispatch } = useAppContext();
  const { basket } = state;

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
    Router.push(query);
  };

  return (
    <>
      <section className="search" data-testid="Header">
        <div className="container c_flex">
          <div className="logo width">
            <Link href="/">
              <div>
                <Image src="/Logo.PNG" height="97" width="256" alt="Logo " />
              </div>
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              ref={nameForm}
              name={"search"}
              placeholder="Search for products,brands and more."
              aria-label="Search Box"
            ></input>
            <button onClick={search} type="button" aria-label="Search Button">
              <FaSearch />
            </button>
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <Link href="/carts">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
              <span aria-label="Cart Count">
                {basket ? getcount(basket) : 0}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
