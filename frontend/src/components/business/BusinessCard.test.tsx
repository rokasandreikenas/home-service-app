import { render, screen } from "@testing-library/react";
import BusinessCard from "./BusinessCard";
import { Business } from "./types";

const mockBusiness: Business = {
  _id: "1",
  about: "test",
  email: "test@gmail.com",
  imageUrls: ["https://example.com/image.jpg"],
  name: "Test Business",
  category: "Restaurant",
  contactPerson: "John Doe",
  address: "123 Test Street",
};

const mockBusinessWithoutImage: Business = {
  ...mockBusiness,
  imageUrls: [],
};

describe("<BusinessCard />", () => {
  test("renders Business Card with all details", () => {
    render(<BusinessCard business={mockBusiness} />);

    expect(screen.getByAltText("Test Business")).toBeInTheDocument();
    expect(screen.getByText("Restaurant")).toBeInTheDocument();
    expect(screen.getByText("Test Business")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("123 Test Street")).toBeInTheDocument();
    expect(screen.getByText("Book now")).toBeInTheDocument();
  });

  test("does not render image if imageUrls array is empty", () => {
    render(<BusinessCard business={mockBusinessWithoutImage} />);

    expect(screen.queryByAltText("Test Business")).not.toBeInTheDocument();
  });

  test("renders the 'Book now' button", () => {
    render(<BusinessCard business={mockBusiness} />);

    expect(
      screen.getByRole("button", { name: /Book now/i })
    ).toBeInTheDocument();
  });
});
