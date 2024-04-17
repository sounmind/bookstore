"use client";

import { useState, type FC } from "react";
import { useDeleteBook, useUpdateBook } from "../hooks/useBookActions";
import type { Price } from "../models/Book";
import BookForm from "./BookForm";
import Popup from "./Popup";

interface Props {
  id: number;
  title: string;
  price: Price;
  category: string;
  description: string;
}

export const Book: FC<Props> = ({
  id,
  title,
  price,
  category,
  description,
}) => {
  const [isVisibleEditingForm, setIsVisibleEditingForm] = useState(false);
  const deleteBook = useDeleteBook();
  const updateBook = useUpdateBook();

  const showEditingForm = () => {
    setIsVisibleEditingForm(true);
  };

  return (
    <>
      <article aria-label="book" onClick={showEditingForm}>
        <h2>Title: {title}</h2>

        <p>Category: {category}</p>
        <p>Price: {`${price.currency} ${price.amount}`}</p>
        <p>Description: {description}</p>

        <button onClick={() => deleteBook(id)}>Delete</button>
      </article>

      <Popup
        isVisible={isVisibleEditingForm}
        onClose={() => {
          setIsVisibleEditingForm(false);
        }}
      >
        <h2>Update Book</h2>

        <BookForm
          initialBook={{ id, title, price, category, description }}
          onSubmit={(book) => updateBook(book)}
          onClose={() => setIsVisibleEditingForm(false)}
        />
      </Popup>
    </>
  );
};
