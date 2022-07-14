import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Checking Footer Component", () => {
  test("Should render Footer  Elements ", () => {
    render(<Footer />);
    const FooterElement = screen.getByTestId("Footer");
    expect(FooterElement).toBeInTheDocument();
    expect(FooterElement).toHaveTextContent("Ecomm");
    expect(FooterElement).toHaveTextContent("About Us");
    expect(FooterElement).toHaveTextContent("Customer Care");
    expect(FooterElement).toHaveTextContent("Contact Us");
  });
});
