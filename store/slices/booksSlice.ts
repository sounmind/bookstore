import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialBooks from "../../data/books";
import type { Book } from "../../models/Book";

interface BooksState {
  list: Book[];
}

const initialState: BooksState = {
  list: initialBooks,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.list.push(action.payload);
    },

    updateBook(state, action: PayloadAction<Book>) {
      const index = state.list.findIndex(
        (book) => book.id === action.payload.id
      );
      state.list[index] = action.payload;
    },

    deleteBook(state, action: PayloadAction<number>) {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
