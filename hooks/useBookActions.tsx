import { useDispatch } from "react-redux";
import type { Book } from "../models/Book";
import { addBook, deleteBook, updateBook } from "../store/slices/booksSlice";
import { AppDispatch } from "../store/store";

export const useAddBook = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (book: Book) => {
    dispatch(addBook(book));
  };
};

export const useUpdateBook = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (book: Book) => {
    dispatch(updateBook(book));
  };
};

export const useDeleteBook = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (bookId: number) => {
    dispatch(deleteBook(bookId));
  };
};
