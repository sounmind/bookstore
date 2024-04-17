import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAllBooksSelector = () => {
  return useSelector((state: RootState) => state.books.list);
};

export const useTotalBooksSelector = (): number => {
  return useSelector((state: RootState) => state.books.list.length);
};
