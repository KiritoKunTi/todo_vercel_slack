import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./App";

test("добавление задачи", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Новая задача" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Новая задача")).toBeInTheDocument();
});

test("удаление задачи", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Удаляемая задача" } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText("X");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Удаляемая задача")).not.toBeInTheDocument();
});
