import { fireEvent, render, screen } from "@testing-library/react";

import { Client } from "@/src/types/client";
import DashboardTable from "../DashboardTable";

export const data: Client[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    birthDate: new Date("1990-01-01"),
    address: "123 Main St",
    notes: "Lorem ipsum dolor sit amet",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    assignedToUserId: "1",
  },
];

// Mock the Table component
jest.mock("../../Table/Table", () => {
  return function MockTable({ data, onRowClick, onPageChange }: any) {
    return (
      <div data-testid="mock-table">
        <button onClick={() => onPageChange(2)}>Change Page</button>
        <button onClick={() => onRowClick(data[0])}>Click Row</button>
        <div>Items: {data.length}</div>
      </div>
    );
  };
});

describe("DashboardTable", () => {
  it("renders the Table component", () => {
    render(<DashboardTable />);
    expect(screen.getByTestId("mock-table")).toBeInTheDocument();
  });

  it("handles page changes correctly", () => {
    render(<DashboardTable />);
    fireEvent.click(screen.getByText("Change Page"));
    // You could add more specific assertions here based on your needs
  });

  it("handles row clicks correctly", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<DashboardTable />);
    fireEvent.click(screen.getByText("Click Row"));
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
