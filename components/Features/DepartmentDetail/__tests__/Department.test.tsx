// components/__tests__/DepartmentDetail.test.tsx
import { render, screen } from "@testing-library/react";
import DepartmentDetail from "..";
import { IDepartment } from "@/app/_core/interfaces/common";
import React from "react";

describe("DepartmentDetail Component", () => {
  const mockDepartment: IDepartment = {
    title: "Luxury Beachfront Villa",
    location: "Miami",
    price: "$1,500,000",
    image: "luxury-villa.jpg",
    id: "aa",
    leasehold: "",
    subTitle: "",
  };

  it("renders the department title correctly", () => {
    render(<DepartmentDetail {...mockDepartment} />);
    const titleElement = screen.getByText(mockDepartment.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the department location correctly", () => {
    render(<DepartmentDetail {...mockDepartment} />);
    const locationElement = screen.getByText(mockDepartment.location);
    expect(locationElement).toBeInTheDocument();
  });

  it("renders the department price correctly", () => {
    render(<DepartmentDetail {...mockDepartment} />);
    const priceElement = screen.getByText(mockDepartment.price);
    expect(priceElement).toBeInTheDocument();
  });

  it("renders the client and date information correctly", () => {
    render(<DepartmentDetail {...mockDepartment} />);
    const clientElement = screen.getByText("John Doe");
    const dateElement = screen.getByText("March 2023");
    expect(clientElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
