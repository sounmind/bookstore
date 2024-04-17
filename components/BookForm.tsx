import React, { useEffect, useState } from "react";
import { useTotalBooksSelector } from "../hooks/useBookSelectors";
import type { Book } from "../models/Book";

interface Props {
  initialBook?: Book;
  onSubmit: (book: Book) => void;
  onClose: () => void;
}

const BookForm: React.FC<Props> = ({ initialBook, onSubmit, onClose }) => {
  const totalBooks = useTotalBooksSelector();
  const [book, setBook] = useState<Book>({
    id: totalBooks + 1,
    title: "",
    category: "",
    price: {
      amount: 0,
      currency: "USD",
    },
    description: "",
    ...initialBook,
  });

  useEffect(() => {
    if (initialBook) {
      setBook(initialBook);
    }
  }, [initialBook]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setBook((previousBook) => {
      if (name === "price.amount") {
        return {
          ...previousBook,
          price: {
            ...previousBook.price,
            amount: Number(value),
          },
        };
      }

      if (name === "price.currency") {
        return {
          ...previousBook,
          price: {
            ...previousBook.price,
            currency: value,
          },
        };
      }

      return { ...previousBook, [name]: value };
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(book);
    onClose();
  };

  return (
    <form
      onSubmit={submitForm}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 10,
      }}
    >
      <label>
        Title:
        <input
          required
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <input
          required
          type="text"
          name="category"
          value={book.category}
          onChange={handleChange}
        />
      </label>

      <label>
        Currency:
        <input
          required
          type="text"
          name="price.currency"
          value={book.price.currency}
          onChange={handleChange}
        />
      </label>

      <label>
        Price:
        <input
          required
          type="number"
          step="0.01"
          name="price.amount"
          value={book.price.amount}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <textarea
          required
          name="description"
          value={book.description}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
