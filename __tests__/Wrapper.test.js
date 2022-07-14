import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Wrapper from "../components/Wrapper";

describe("Wrapper Element", () => {
  test("Should render Wrapper Section", () => {
    render(<Wrapper />);
    const Wrrpr = screen.getByTestId("Wrapper");
    expect(Wrrpr).toBeInTheDocument();
    expect(Wrrpr).toHaveTextContent("Worldwide Delivery");
    expect(Wrrpr).toHaveTextContent("Safe Payment");
    expect(Wrrpr).toHaveTextContent("Shop With Confidence");
    expect(Wrrpr).toHaveTextContent("24/7 Support");
  });
});
