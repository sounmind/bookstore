"use client";

import { useState } from "react";
import { useAddBook } from "../hooks/useBookActions";
import BookForm from "./BookForm";
import Popup from "./Popup";

export const BookAddButton = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const addBook = useAddBook();

  const showBookCreatingForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <button onClick={showBookCreatingForm}>Add Book</button>

      <Popup isVisible={showForm} onClose={() => setShowForm(false)}>
        <h2>Add Book</h2>

        <BookForm
          onSubmit={(book) => addBook(book)}
          onClose={() => setShowForm(false)}
        />
      </Popup>
    </>
  );
};
