import { useEffect } from "react";
import BookCreate from "../components/books/BookCreate";
import BookList from "../components/books/BookList";
import useBooksContext from "../hooks/use-books-context";

function BookPage() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    try {
      fetchBooks();
    } catch (error) {
      console.log("Error ", error);
    }
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default BookPage;
