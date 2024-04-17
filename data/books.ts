import type { Book } from "../models/Book";

const books: Book[] = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    price: {
      amount: 40.99,
      currency: "USD",
    },
    category: "Computer Science",
    description:
      "Comprehensive textbook on algorithms used in computer science.",
  },
  {
    id: 2,
    title: "The Great Gatsby",
    price: {
      amount: 15.99,
      currency: "USD",
    },
    category: "Classic Literature",
    description:
      "A classic piece of American literature by F. Scott Fitzgerald.",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    price: {
      amount: 10.99,
      currency: "USD",
    },
    category: "Classic Literature",
    description:
      "A novel by J. D. Salinger, narrated by a teenager titled Holden Caulfield.",
  },
  {
    id: 4,
    title: "The Design of Everyday Things",
    price: {
      amount: 20.99,
      currency: "USD",
    },
    category: "Design",
    description:
      "A book by Don Norman that explores the design of objects in everyday life.",
  },
];

export default books;
