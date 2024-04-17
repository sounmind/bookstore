import React from "react";
import { BookAddButton } from "../components/BookAddButton";
import { BookList } from "../components/BookList";

export default function Page() {
  return (
    <main>
      <h1>Bookstore</h1>

      <BookAddButton />
      <BookList />
    </main>
  );
}
