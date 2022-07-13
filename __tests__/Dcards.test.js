import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dcards from "../components/Dcards";

describe("Cheking Show Multiple Discount Elements", () => {
  test("Loading Multiple Products", () => {
    render(<Dcards />);
    const Product1 = screen.getAllByTestId("product_1");
    const Product2 = screen.getAllByTestId("product_2");
    const Product3 = screen.getAllByTestId("product_3");
    const Product4 = screen.getAllByTestId("product_4");
    expect(Product1).toBeTruthy();
    expect(Product2).toBeTruthy();
    expect(Product3).toBeTruthy();
    expect(Product4).toBeTruthy();
    expect(screen.queryAllByTestId("product_11")).toStrictEqual([]);
    expect(screen.queryAllByTestId("product_8")).toStrictEqual([]);
  });
});
