import { useState, createContext, useCallback } from "react";
import axios from "axios";
const BooksContext = createContext();
const apiUrl = "http://localhost:3001/books";

export const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get(apiUrl);
    setBooks(res.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`${apiUrl}/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const res = await axios.post(apiUrl, {
      title,
    });

    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, editBookById, deleteBookById, createBook, fetchBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
