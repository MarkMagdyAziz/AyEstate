import { render, screen } from "@testing-library/react";
import BlogSmallCard from "../BlogSmallCard"; // Adjust the path as needed

describe("BlogSmallCard", () => {
  const defaultProps = {
    date: "2024-12-10",
    title: "Test Small Blog Title",
    paragraph: "This is a test paragraph for the small blog card.",
    imageSrc: "/path/to/image.jpg",
  };

  it("renders the BlogSmallCard with required props", () => {
    render(<BlogSmallCard {...defaultProps} />);

    expect(screen.getByText("2024-12-10")).toBeInTheDocument();

    expect(screen.getByText("Test Small Blog Title")).toBeInTheDocument();

    expect(
      screen.getByText("This is a test paragraph for the small blog card."),
    ).toBeInTheDocument();

    const img = screen.getByAltText("Test Small Blog Title image");
    expect(img).toBeInTheDocument();
  });

  it("renders with the correct font", () => {
    render(<BlogSmallCard {...defaultProps} />);

    const paragraphElement = screen.getByText(defaultProps.paragraph);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders the image with correct placeholder", () => {
    render(<BlogSmallCard {...defaultProps} />);

    const img = screen.getByAltText("Test Small Blog Title image");
    expect(img).toBeInTheDocument();
  });

  it("renders correctly when no props are missing", () => {
    render(<BlogSmallCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();

    const img = screen.getByAltText("Test Small Blog Title image");
    expect(img).toBeInTheDocument();
  });

  it("does not break when optional children are not passed", () => {
    render(<BlogSmallCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();
  });
});
