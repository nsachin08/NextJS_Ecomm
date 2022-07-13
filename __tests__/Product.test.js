import { render, screen, fireEvent } from "@testing-library/react";
import { AppWrapper } from "../context/StateProvider";
import "@testing-library/jest-dom";
import Product from "../components/Product";
import Banner1 from "../BannerImages/Banner1.jpg";
import { reducer } from "../context/reducer";

describe("Checking Product Component", () => {
  function renderProduct(data) {
    return render(
      <AppWrapper>
        <Product product={data} />
      </AppWrapper>
    );
  }

  const data1 = {
    _id: 1,
    title: "Product Name",
    price: 500,
    images: Banner1,
    quantity: 1,
  };
  const state = {
    basket: [],
  };

  test("Should render Product Elements ", () => {
    renderProduct(data1);
    const Product = screen.getByTestId("product_1");
    expect(Product).toHaveTextContent(data1.title);
    expect(Product).toHaveTextContent(data1.price);
  });

  test("Should Add to Cart upon clicking add Button", () => {
    renderProduct(data1);
    const addAction = {
      type: "ADD_TO_BASKET",
      item: {
        _id: data1._id,
        title: data1.title,
        price: data1.price,
        images: data1.images,
      },
    };
    const stateafter = {
      basket: [data1],
    };
    expect(reducer(state, addAction)).toEqual(stateafter);
  });
});
