import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { reducer } from "../context/reducer";
import { AppWrapper } from "../context/StateProvider";
import ProductDetail from "../pages/product/[productid]";
import Banner1 from "../BannerImages/Banner1.jpg";

describe("Product Detail Page", () => {
  function renderProductDetails(data) {
    return render(
      <AppWrapper>
        <ProductDetail data={data} />
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
  test("render Product Detail Page", () => {
    renderProductDetails(data1);
    const ProductDetail = screen.getByTestId("productdetail_1");
    expect(ProductDetail).toBeInTheDocument();
    expect(ProductDetail).toHaveTextContent(data1.title);
    expect(ProductDetail).toHaveTextContent(data1.price);
  });
  test("Should Add to Cart upon clicking in Add to cart", () => {
    renderProductDetails(data1);
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
    data1.quantity = 2;
    const stateafter1 = {
      basket: [data1],
    };
    const logSpy = jest.spyOn(console, "log");
    expect(reducer(state, addAction)).toEqual(stateafter1);
    const addButton = screen.getByLabelText("Add Button");
    fireEvent.click(addButton);
    expect(logSpy).toHaveBeenCalledWith("Added");
  });
});
