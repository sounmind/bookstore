import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { Provider } from "react-redux";
import BookForm from "../components/BookForm";
import { store } from "../store/store";

const renderComponent = (
  props: Partial<ComponentProps<typeof BookForm>> = {}
) => {
  const book = {
    id: 1000,
    title: "Book Title",
    price: { currency: "USD", amount: 10 },
    category: "Category",
    description: "Book Description",
  };

  return render(
    <Provider store={store}>
      <BookForm
        initialBook={book}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
        {...props}
      />
    </Provider>
  );
};

test("if initial book is provided, form should be filled with initial book data.", () => {
  const book = {
    id: 1000,
    title: "Book Title",
    price: { currency: "USD", amount: 10 },
    category: "Category",
    description: "Book Description",
  };

  renderComponent({ initialBook: book });

  expect(screen.getByLabelText("Title:")).toHaveValue(book.title);
  expect(screen.getByLabelText("Category:")).toHaveValue(book.category);
  expect(screen.getByLabelText("Price:")).toHaveValue(book.price.amount);
  expect(screen.getByLabelText("Currency:")).toHaveValue(book.price.currency);
  expect(screen.getByLabelText("Description:")).toHaveValue(book.description);
});

test("if initial book is not provided, form should be empty.", () => {
  renderComponent({ initialBook: undefined });

  expect(screen.getByLabelText("Title:")).toHaveValue("");
  expect(screen.getByLabelText("Category:")).toHaveValue("");
  expect(screen.getByLabelText("Price:")).toHaveValue(0);
  expect(screen.getByLabelText("Currency:")).toHaveValue("USD");
  expect(screen.getByLabelText("Description:")).toHaveValue("");
});

test("if submit button is clicked, onSubmit should be called with form data.", () => {
  const onSubmit = jest.fn();

  renderComponent({ initialBook: undefined, onSubmit });

  const title = "New Book Title";
  const category = "New Category";
  const price = 20;
  const currency = "JPY";
  const description = "New Book Description";

  const titleInput = screen.getByLabelText("Title:");
  const categoryInput = screen.getByLabelText("Category:");
  const priceInput = screen.getByLabelText("Price:");
  const currencyInput = screen.getByLabelText("Currency:");
  const descriptionInput = screen.getByLabelText("Description:");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(titleInput, { target: { value: title } });
  fireEvent.change(categoryInput, { target: { value: category } });
  fireEvent.change(priceInput, { target: { value: price } });
  fireEvent.change(currencyInput, { target: { value: currency } });
  fireEvent.change(descriptionInput, { target: { value: description } });

  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ title }));
  expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ category }));
  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      price: {
        currency,
        amount: price,
      },
    })
  );
  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({ description })
  );
});
