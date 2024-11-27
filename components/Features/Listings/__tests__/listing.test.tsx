import { render, screen, fireEvent } from "@testing-library/react";
import { FiltersSectionWrapper } from "../FiltersSectionWrapper";
import ListingFilters from "../ListingFilters";
import userEvent from "@testing-library/user-event";
import ListingPagination from "../ListingPagination";

describe("Listings FiltersSectionWrapper Component", () => {
  const mockTitle = "Filter Title";
  const mockChildren = <div data-testid="children">Children Content</div>;

  it("renders the title correctly", () => {
    render(
      <FiltersSectionWrapper title={mockTitle}>
        {mockChildren}
      </FiltersSectionWrapper>,
    );
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the arrow icon correctly", () => {
    render(
      <FiltersSectionWrapper title={mockTitle}>
        {mockChildren}
      </FiltersSectionWrapper>,
    );
    const arrowIcon = screen.getByAltText("arrow down icon");
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveAttribute("src", "/arrow-up.svg");
  });

  it("toggles the section open and closed", () => {
    render(
      <FiltersSectionWrapper title={mockTitle}>
        {mockChildren}
      </FiltersSectionWrapper>,
    );
    const toggleButton = screen.getByRole("button");
    const { parentElement } = screen.getByTestId("children");

    // Initially, the section should be open
    expect(parentElement).toHaveClass("max-h-screen opacity-100");

    // Click the button to close the section
    fireEvent.click(toggleButton);
    expect(parentElement).toHaveClass("max-h-0 opacity-0");

    // Click the button again to open the section
    fireEvent.click(toggleButton);
    expect(parentElement).toHaveClass("max-h-screen opacity-100");
  });

  it("displays children when open", () => {
    render(
      <FiltersSectionWrapper title={mockTitle}>
        {mockChildren}
      </FiltersSectionWrapper>,
    );
    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("hides children when closed", () => {
    render(
      <FiltersSectionWrapper title={mockTitle}>
        {mockChildren}
      </FiltersSectionWrapper>,
    );
    const toggleButton = screen.getByRole("button");

    const { parentElement } = screen.getByTestId("children");

    // Click the button to close the section
    fireEvent.click(toggleButton);
    expect(parentElement).toHaveClass("max-h-0 opacity-0");
  });
});

describe("Listings ListingFilters Component", () => {
  it("renders the main header", () => {
    render(<ListingFilters />);
    expect(screen.getByText(/Filter Option/i)).toBeInTheDocument();
  });

  it("renders the Best Filter section with checkboxes", () => {
    render(<ListingFilters />);
    expect(screen.getByText(/Best Filter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4 stars or upper/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Luxury Building/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Best Seller/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Discount/i)).toBeInTheDocument();
  });

  it("renders the Category section with category checkboxes", () => {
    render(<ListingFilters />);
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    const categories = ["House", "Villa", "Apartment", "Hotel", "Real Estate"];
    categories.forEach((category) => {
      expect(screen.getByLabelText(category)).toBeInTheDocument();
    });
    expect(screen.getByText(/Show All Categories/i)).toBeInTheDocument();
  });

  it("renders the Best Range section with custom number inputs", () => {
    render(<ListingFilters />);
    expect(screen.getByText(/Best Range/i)).toBeInTheDocument();
    const customNumbers = screen.getAllByRole("spinbutton");
    expect(customNumbers).toHaveLength(2); // Assuming CustomNumber renders an <input type="number">
  });

  it("renders range price options", () => {
    render(<ListingFilters />);
    expect(screen.getByText(/\$0-\$5,000/i)).toBeInTheDocument();
    expect(screen.getByText(/\$5,000 - \$50,000/i)).toBeInTheDocument();
    expect(screen.getByText(/> \$50,000/i)).toBeInTheDocument();
  });

  it("checks the functionality of checkboxes", async () => {
    render(<ListingFilters />);
    const user = userEvent.setup();
    const checkbox = screen.getByLabelText(/4 stars or upper/i);
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});

describe("ListingPagination Component", () => {
  it("renders the Previous button", () => {
    render(<ListingPagination />);
    const prevButton = screen.getByLabelText(/Previous page/i);
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled(); // Should be disabled on the first page
  });

  it("renders the Next button", () => {
    render(<ListingPagination />);
    const nextButton = screen.getByLabelText(/Next page/i);
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeEnabled(); // Should not be disabled on the first page
  });

  it("renders the correct number of page buttons", () => {
    render(<ListingPagination />);
    const pageButtons = screen.getAllByRole("button", { name: /Go to page/i });
    expect(pageButtons).toHaveLength(3); // 30 items, 10 per page => 3 pages
  });

  it("highlights the current page", () => {
    render(<ListingPagination />);
    const currentPageButton = screen.getByRole("button", {
      name: /Go to page 1/i,
    });
    expect(currentPageButton).toHaveClass("bg-app-primary");
  });

  it("navigates to the next page when Next button is clicked", async () => {
    render(<ListingPagination />);
    const user = userEvent.setup();
    const nextButton = screen.getByLabelText(/Next page/i);
    const currentPageButton = screen.getByRole("button", {
      name: /Go to page 1/i,
    });

    expect(currentPageButton).toHaveClass("bg-app-primary");
    await user.click(nextButton);
    const updatedPageButton = screen.getByRole("button", {
      name: /Go to page 2/i,
    });
    expect(updatedPageButton).toHaveClass("bg-app-primary");
  });

  it("navigates to the previous page when Previous button is clicked", async () => {
    render(<ListingPagination />);
    const user = userEvent.setup();
    const nextButton = screen.getByLabelText(/Next page/i);
    const prevButton = screen.getByLabelText(/Previous page/i);

    await user.click(nextButton); // Move to page 2
    expect(screen.getByRole("button", { name: /Go to page 2/i })).toHaveClass(
      "bg-app-primary",
    );

    await user.click(prevButton); // Move back to page 1
    expect(screen.getByRole("button", { name: /Go to page 1/i })).toHaveClass(
      "bg-app-primary",
    );
  });

  it("disables the Next button on the last page", async () => {
    render(<ListingPagination />);
    const user = userEvent.setup();
    const nextButton = screen.getByLabelText(/Next page/i);

    // Navigate to the last page
    for (let i = 0; i < 2; i++) {
      await user.click(nextButton);
    }
    expect(screen.getByRole("button", { name: /Go to page 3/i })).toHaveClass(
      "bg-app-primary",
    );
    expect(nextButton).toBeDisabled();
  });

  it("disables the Previous button on the first page", () => {
    render(<ListingPagination />);
    const prevButton = screen.getByLabelText(/Previous page/i);
    expect(prevButton).toBeDisabled();
  });

  it("navigates to a specific page when a page button is clicked", async () => {
    render(<ListingPagination />);
    const user = userEvent.setup();
    const pageTwoButton = screen.getByRole("button", { name: /Go to page 2/i });

    await user.click(pageTwoButton);
    expect(pageTwoButton).toHaveClass("bg-app-primary");
  });

  it("does not navigate beyond the first or last page", async () => {
    render(<ListingPagination />);
    const user = userEvent.setup();
    const prevButton = screen.getByLabelText(/Previous page/i);
    const nextButton = screen.getByLabelText(/Next page/i);

    await user.click(prevButton); // Attempt to go before page 1
    expect(screen.getByRole("button", { name: /Go to page 1/i })).toHaveClass(
      "bg-app-primary",
    );

    // Navigate to the last page
    for (let i = 0; i < 2; i++) {
      await user.click(nextButton);
    }
    await user.click(nextButton); // Attempt to go beyond page 3
    expect(screen.getByRole("button", { name: /Go to page 3/i })).toHaveClass(
      "bg-app-primary",
    );
  });
});
