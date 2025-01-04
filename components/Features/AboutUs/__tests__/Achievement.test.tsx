import { render, screen } from "@testing-library/react";
import AchievementFeature from "@/components/Features/AboutUs/Achievement/AchievementFeature";
import React from "react";
import Achievement from "../Achievement/Achievement";

describe("AboutUs AchievementFeature Component", () => {
  it("should render correct title", () => {
    render(<AchievementFeature title="Title for Test" />);
    const title = screen.getByTestId("title");

    expect(title).toHaveTextContent("Title for Test");
  });

  it("should render correct subtitle", () => {
    render(
      <AchievementFeature
        title="Title for Test"
        subTitle="Subtitle for Test"
      />,
    );
    const subTitle = screen.getByTestId("sub-title");

    expect(subTitle).toHaveTextContent("Subtitle for Test");
  });
});

describe("AboutUs Achievement Component", () => {
  it("renders the section title and description", () => {
    render(<Achievement />);

    const sectionTitle = screen.getByText("OUR AWARD THIS YEAR");
    const sectionDescription = screen.getByText(
      "We’re happy to receive this award so that it motivates us to grow and provide the best service for you.",
    );

    expect(sectionTitle).toBeInTheDocument();
    expect(sectionDescription).toBeInTheDocument();
  });

  it("renders the AchievementFeature components", () => {
    render(<Achievement />);

    const achievementFeatures = [
      "Best Small Companies",
      "Fast Company Growth",
      "Best Development Team",
    ];

    achievementFeatures.forEach((title) => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('renders the "View All Project" button', () => {
    render(<Achievement />);

    const button = screen.getByText("View All Project");
    expect(button).toBeInTheDocument();
  });

  it("renders the company icons", () => {
    render(<Achievement />);

    const icons = [
      "icons/Facebook-Logo.wine.svg",
      "icons/Netflix-Logo.wine.svg",
      "icons/YouTube-Logo.wine.svg",
      "icons/Google-Logo.wine 1.svg",
      "icons/Amazon_(company)-Logo.wine.svg",
    ];

    icons.forEach((iconALt) => {
      const iconElement = screen.getByAltText(iconALt);
      expect(iconElement).toBeInTheDocument();
    });
  });

  it("renders the footer text", () => {
    render(<Achievement />);

    const footerText = screen.getByText(
      "We’ve built with the most growth company around the world",
    );
    expect(footerText).toBeInTheDocument();
  });
});
