import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlideCard from "../components/SlideCard";
import Banner2 from "../BannerImages/Banner2.jpg";

describe("Checking Slider Component", () => {
  test("Should render Slider  Elements ", () => {
    render(<SlideCard image={Banner2} />);
    const SliderElement = screen.getByTestId("Slider");
    expect(SliderElement).toBeInTheDocument();
  });
});
