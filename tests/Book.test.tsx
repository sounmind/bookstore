import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { Provider } from "react-redux";
import { Book } from "../components/Book";
import { store } from "../store/store";

const renderComponent = (props: Partial<ComponentProps<typeof Book>> = {}) => {
  const book = {
    id: 1,
    title: "Book Title",
    price: { currency: "USD", amount: 10 },
    category: "Category",
    description: "Book Description",
  };

  return render(
    <Provider store={store}>
      <Book {...book} {...props} />
    </Provider>
  );
};

test("render book title", () => {
  const title = "Book Title";

  renderComponent({ title });

  expect(screen.getByText(new RegExp(title))).toBeInTheDocument();
});

test("render book category", () => {
  const category = "Category";

  renderComponent({ category });

  expect(screen.getByText(new RegExp(category))).toBeInTheDocument();
});

test("render book price", () => {
  const price = { currency: "USD", amount: 10 };

  renderComponent({ price });

  expect(
    screen.getByText(new RegExp(`${price.currency} ${price.amount}`))
  ).toBeInTheDocument();
});

test("render book description", () => {
  const description = "Book Description";

  renderComponent({ description });

  expect(screen.getByText(new RegExp(description))).toBeInTheDocument();
});

test("if click on book, show editing form", () => {
  renderComponent();

  fireEvent.click(screen.getByLabelText("book"));

  expect(screen.getByText("Update Book")).toBeInTheDocument();
});
