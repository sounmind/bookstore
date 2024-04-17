"use client";

import type { FC } from "react";
import { useAllBooksSelector } from "../hooks/useBookSelectors";
import { Book } from "./Book";

interface Props {}

export const BookList: FC<Props> = () => {
  const books = useAllBooksSelector();

  return (
    <section>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Book {...book} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
