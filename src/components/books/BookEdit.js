import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";
import Button from "../reusable/Button";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button primary>Save</Button>
    </form>
  );
}

export default BookEdit;
