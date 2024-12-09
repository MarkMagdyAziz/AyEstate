import { render, screen } from "@testing-library/react";
import BlogCard from "../BlogCard"; // Adjust the path as needed

describe("BlogCard", () => {
  const defaultProps = {
    date: "2024-12-10",
    title: "Test Blog Title",
    paragraph: "This is a test paragraph for the blog card.",
    imageSrc: "/path/to/image.jpg",
  };

  it("renders the BlogCard with required props", () => {
    render(<BlogCard {...defaultProps} />);

    expect(screen.getByText("2024-12-10")).toBeInTheDocument();

    expect(screen.getByText("Test Blog Title")).toBeInTheDocument();

    expect(
      screen.getByText("This is a test paragraph for the blog card."),
    ).toBeInTheDocument();

    const img = screen.getByAltText("house blog");
    expect(img).toBeInTheDocument();
  });

  it("renders subParagraph if passed", () => {
    const subParagraph = "This is a sub-paragraph.";
    render(<BlogCard {...defaultProps} subParagraph={subParagraph} />);

    expect(screen.getByText(subParagraph)).toBeInTheDocument();
  });

  it("does not render subParagraph if not passed", () => {
    render(<BlogCard {...defaultProps} />);

    const subParagraphElement = screen.queryByText("This is a sub-paragraph.");
    expect(subParagraphElement).not.toBeInTheDocument();
  });

  it("has correct default image placeholder", () => {
    render(<BlogCard {...defaultProps} />);

    const img = screen.getByAltText("house blog");
    expect(img).toBeInTheDocument();
  });

  it("renders the BlogCard correctly with all props", () => {
    const customProps = {
      ...defaultProps,
      subParagraph: "A detailed sub-paragraph",
    };
    render(<BlogCard {...customProps} />);

    expect(screen.getByText(customProps.date)).toBeInTheDocument();
    expect(screen.getByText(customProps.title)).toBeInTheDocument();
    expect(screen.getByText(customProps.paragraph)).toBeInTheDocument();
    expect(screen.getByText(customProps.subParagraph)).toBeInTheDocument();

    const img = screen.getByAltText("house blog");
    expect(img).toBeInTheDocument();
  });
});
