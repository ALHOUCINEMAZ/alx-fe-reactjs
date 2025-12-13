import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/todo/i)).toBeInTheDocument();
});

