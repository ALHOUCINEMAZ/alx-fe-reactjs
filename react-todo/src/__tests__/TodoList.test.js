import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  it("renders Todo List", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });
});
