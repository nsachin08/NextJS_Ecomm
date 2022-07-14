import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Annoucement from "../components/Announcement";

describe("Announcement Element", () => {
  test("Annoucement Section", () => {
    render(<Annoucement />);
    const Ancmnt = screen.getByTestId("Announcement");
    expect(Ancmnt).toBeInTheDocument();
  });
});
