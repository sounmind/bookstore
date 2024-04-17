import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { Provider } from "react-redux";
import { BookAddButton } from "../components/BookAddButton";
import { store } from "../store/store";

const renderComponent = (
  props: Partial<ComponentProps<typeof BookAddButton>> = {}
) => {
  return render(
    <Provider store={store}>
      <BookAddButton />
    </Provider>
  );
};

test("render add book button", () => {
  renderComponent();

  expect(screen.getByRole("button", { name: "Add Book" })).toBeInTheDocument();
});

test("if click on add button, show book form", () => {
  renderComponent();

  expect(screen.queryByLabelText("Title:")).toBeNull();

  const addBookButton = screen.getByRole("button", { name: "Add Book" });

  fireEvent.click(addBookButton);

  expect(screen.getByLabelText("Title:")).toBeInTheDocument();
});

test("form should be empty when opened", () => {
  renderComponent();

  const addBookButton = screen.getByRole("button", { name: "Add Book" });

  fireEvent.click(addBookButton);

  expect(screen.getByLabelText("Title:")).toHaveValue("");
  expect(screen.getByLabelText("Category:")).toHaveValue("");
  expect(screen.getByLabelText("Price:")).toHaveValue(0);
  expect(screen.getByLabelText("Currency:")).toHaveValue("USD");
  expect(screen.getByLabelText("Description:")).toHaveValue("");
});
