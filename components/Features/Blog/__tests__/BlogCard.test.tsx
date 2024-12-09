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

    // Check if the date is rendered
    expect(screen.getByText("2024-12-10")).toBeInTheDocument();

    // Check if the title is rendered
    expect(screen.getByText("Test Small Blog Title")).toBeInTheDocument();

    // Check if the paragraph is rendered
    expect(
      screen.getByText("This is a test paragraph for the small blog card."),
    ).toBeInTheDocument();

    // Check if the image is rendered with the correct src
    const img = screen.getByAltText("Test Small Blog Title image");
    expect(img).toBeInTheDocument();
  });

  it("renders with the correct font", () => {
    render(<BlogSmallCard {...defaultProps} />);

    // Check if the font family is applied (the class name for Plus Jakarta Sans)
    const paragraphElement = screen.getByText(defaultProps.paragraph);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders the image with correct placeholder", () => {
    render(<BlogSmallCard {...defaultProps} />);

    // Check if the image has the correct placeholder
    const img = screen.getByAltText("Test Small Blog Title image");
    expect(img).toBeInTheDocument();
  });

  it("renders correctly when no props are missing", () => {
    render(<BlogSmallCard {...defaultProps} />);

    // Check if everything renders correctly with the given props
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();

    const img = screen.getByAltText("Test Small Blog Title image");
    expect(img).toBeInTheDocument();
  });

  it("does not break when optional children are not passed", () => {
    render(<BlogSmallCard {...defaultProps} />);

    // The component should render without any issues even if there are no children
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();
  });
});
