import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice Testing")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Todo" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    expect(todo).toHaveStyle("text-decoration: none");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText("X");
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});

