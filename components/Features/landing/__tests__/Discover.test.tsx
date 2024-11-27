import { render, screen } from "@testing-library/react";
import DiscoverHome from "../DiscoverHome";

// Mock Firebase Firestore
jest.mock("firebase/firestore", () => ({
  getDocs: jest.fn(),
  collection: jest.fn(),
}));

// Mock child components
jest.mock("../../../shared/FindPropertyCard.tsx", () => () => {
  const MockFindPropertyCard = (props: { title: string; name: string }) => (
    <div data-testid="find-property-card" {...props}>
      {props.title}
    </div>
  );
  MockFindPropertyCard.displayName = "MockFindPropertyCard";
  return MockFindPropertyCard;
});
describe("DiscoverHome Component", () => {
  it("renders the component without crashing", () => {
    render(<DiscoverHome />);
    expect(
      screen.getByText(/Discover Your Dream Home Today/i),
    ).toBeInTheDocument();
  });

  it("renders the heading with correct text", () => {
    render(<DiscoverHome />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Discover Your Dream Home Today");
  });

  it("renders the paragraph with correct text", () => {
    render(<DiscoverHome />);
    const paragraph = screen.getByText(
      /Find the perfect property that suits your lifestyle\. Our real estate service offers unique selling propositions that set us apart from the competition\. Find your perfect home today!/i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the Explore Now button", () => {
    render(<DiscoverHome />);
    const exploreButton = screen.getByRole("button", { name: /Explore Now/i });
    expect(exploreButton).toBeInTheDocument();
  });

  it("renders the Learn More button", () => {
    render(<DiscoverHome />);
    const learnMoreButton = screen.getByRole("button", { name: /Learn More/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveClass(
      "border-[1px] border-black bg-transparent",
    );
  });

  it("renders the animation container", () => {
    render(<DiscoverHome />);
    const { parentElement } = screen.getByText(
      /Discover Your Dream Home Today/i,
    );
    expect(parentElement).toBeInTheDocument();
  });

  it("displays buttons in a flex layout", () => {
    render(<DiscoverHome />);
    const { parentElement } = screen.getByText(/Learn More/i);
    expect(parentElement).toHaveClass("flex");
    expect(parentElement).toHaveClass("gap-4");
  });
});
