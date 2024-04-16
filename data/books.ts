import type { Book } from "../models/Book";

const books: Book[] = [
  {
    id: 1,
    name: "Introduction to Algorithms",
    price: 45.99,
    category: "Computer Science",
    description:
      "Comprehensive textbook on algorithms used in computer science.",
  },
  {
    id: 2,
    name: "The Great Gatsby",
    price: 10.99,
    category: "Classic Literature",
    description:
      "A classic piece of American literature by F. Scott Fitzgerald.",
  },
  {
    id: 3,
    name: "The Catcher in the Rye",
    price: 12.99,
    category: "Classic Literature",
    description:
      "A novel by J. D. Salinger, narrated by a teenager named Holden Caulfield.",
  },
  {
    id: 4,
    name: "The Design of Everyday Things",
    price: 20.99,
    category: "Design",
    description:
      "A book by Don Norman that explores the design of objects in everyday life.",
  },
];

export default books;
