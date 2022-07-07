import { render, screen, fireEvent } from "@testing-library/react";
import { initialState } from "../context/reducer";
import { AppWrapper } from "../context/StateProvider";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Router from "next/router";

jest.mock("next/router", () => ({
  push: jest.fn(),
}));

initialState.basket = [
  { id: 1, title: "Product Name", price: 500, quantity: 7 },
];

describe("Checking Header Component", () => {
  function renderHeader() {
    return render(
      <AppWrapper>
        <Header />
      </AppWrapper>
    );
  }

  test("Should render Header  Elements ", () => {
    renderHeader();
    const Headerlement = screen.getByTestId("Header");
    expect(Headerlement).toHaveTextContent("Ecom");
    const InputBox = screen.getByLabelText("Search Box");
    expect(InputBox).toHaveTextContent("");
    const Cart = screen.getByLabelText("Cart Count");
    expect(Cart).toHaveTextContent(7);
  });

  test("Should render Correct Basket Quantity", () => {
    renderHeader();
    const Cart = screen.getByLabelText("Cart Count");
    expect(Cart).toHaveTextContent(7);
  });

  test("Should search ", () => {
    renderHeader();
    const InputBox = screen.getByPlaceholderText(
      "Search for products,brands and more."
    );
    fireEvent.change(InputBox, { target: { value: "laptop" } });
    const SearchButton = screen.getByLabelText("Search Button");
    fireEvent.click(SearchButton);
    expect(Router.push).toHaveBeenCalledWith("/search/laptop");
  });
});
