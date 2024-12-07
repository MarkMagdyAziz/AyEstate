import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "../Card";
import { IAboutUsCard } from "@/app/_core/interfaces/common";

describe("AboutUs Card Component", () => {
  const mockProps: IAboutUsCard = {
    image: "/path/to/image.jpg",
    title: "Software Engineer",
    name: "John Doe",
  };

  it("renders the image with correct alt text", () => {
    render(<Card {...mockProps} />);

    const imageElement = screen.getByAltText(mockProps.title);
    expect(imageElement).toBeInTheDocument();
  });

  it("renders the name", () => {
    render(<Card {...mockProps} />);

    const nameElement = screen.getByTestId("name");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Card {...mockProps} />);

    const titleElement = screen.getByTestId("title");

    expect(titleElement).toBeInTheDocument();
  });

  it("renders the social icons", () => {
    render(<Card {...mockProps} />);

    const socialIcons = ["linkedIn icon", "X icon", "Dribble icon"];

    socialIcons.forEach((altText) => {
      const iconElement = screen.getByAltText(altText);
      expect(iconElement).toBeInTheDocument();
    });
  });

  it("renders the hidden text on large screens", () => {
    render(<Card {...mockProps} />);
    const hiddenText = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    );
    expect(hiddenText).toBeInTheDocument();
  });
});
