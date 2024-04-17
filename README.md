# Bookstore

## Deployment

- https://bookstore-leesche.netlify.app/

## Install & Run the application

Node Version: 21.7.2

```bash
git clone https://github.com/sounmind/bookstore
cd bookstore
npm i
npm run dev
```

## Features & Requirements

### Main Features:

- **Single-Page Application**:
  - Display a list of books with:
    - Book name
    - Price
    - Category
    - A delete button for each entry
  - Include an "Add Book" button to allow users to add new books.

### Book Management:

- **Book Addition**:

  - Implement a popup to add a new book when the "Add Book" button is clicked, with fields for:
    - Book name
    - Price
    - Category
    - Description

- **Book Interaction**:

  - Make each book entry clickable to show a popup for modifying:
    - Book name
    - Price
    - Category
    - Description
  - Update book details on the main page after modifications.

- **Book Deletion**:
  - Enable functionality to delete a book from the list using the delete button.

### Technical Setup:

- **Data Management**:

  - Manage the book list using an array.
  - No backend is required.

- **Technical Requirements**:
  - Use React, Redux, and Hooks for development.
  - Implement server-side rendering.

### Optional Enhancements:

- **Use TypeScript** for development.
- **Deploy the application** to a public domain.

---

## What I Learned and Considered

### Server-Side Rendering with Next.js

For server-side rendering (SSR), I chose to use Next.js after evaluating various SSR tools. After considerable research, I concluded that Next.js was the best fit due to its comprehensive features and community support. Instead of using the `create-next-app` CLI, which comes with additional dependencies, I opted for a minimal setup by installing Next.js separately. This approach allowed me to maintain a leaner application footprint.

### Applying Principles of Separation of Concerns

I made a concerted effort to apply the principles of separation of concerns when composing the components. This resulted in the creation of several distinct components such as `Book`, `BookForm`, and `Popup`. Each component was designed to manage its responsibilities independently, enhancing reusability and maintainability.

### State Management with Redux Toolkit

To manage global state efficiently, I utilized Redux Toolkit. I developed separate action dispatchers and selector hooks, which streamlined the amount of code in the actual components and made the codebase cleaner and more concise.

### Unit Testing for Stability and Maintenance

I wrote unit tests to ensure the stability and maintainability of the components. These tests help guarantee that the components function correctly and continue to do so as the application evolves.

### Deployment Using Netlify

I used Netlify to deploy the front-end application due to its simplicity and ease of use for relatively straightforward applications. Netlify provided a quick and efficient solution to bring the application online, enhancing the project's accessibility.
