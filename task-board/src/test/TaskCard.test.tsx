import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TaskCard from "../components/TaskCard";
import type { TaskCardProps } from "../components/TaskCard";

describe("TaskCard Component", () => {
  it("renders TaskCard with all properties", () => {
    const props = {
      id: 1,
      category: "Frontend",
      title: "Implement the firt task card",
      description: "Description: a short description about the first task card.",
      assignee: "L.W.",
      priority: "High",
    } satisfies TaskCardProps;

    render(<TaskCard {...props} />);

    expect(screen.getByText(/1/)).toBeDefined();
    expect(screen.getByText(/1/)).toBeVisible();
    expect(screen.getByText(/Frontend/)).toBeVisible();
    expect(screen.getByText(/Responsible/)).toBeVisible();
    expect(screen.getByText(/L.W./)).toBeInTheDocument();
    expect(screen.getByText(/High/)).toBeDefined();


    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText(/description about the first task card/)).toBeVisible();

  });
});
