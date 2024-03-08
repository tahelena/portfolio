import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../../hooks/use-books-context";
import Button from "../reusable/Button";
import Panel from "../reusable/Panel";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => deleteBookById(book.id);
  const handleEditClick = () => setShowEdit(!showEdit);
  const handleSubmit = () => setShowEdit(false);

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <Panel className="book-show w-60">
      <img
        className="w-60"
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <p className="pb-2">{content}</p>
      <div className="flex gap-2">
        <Button warning onClick={handleEditClick}>
          Edit
        </Button>
        <Button danger onClick={handleDeleteClick}>
          Delete
        </Button>
      </div>
    </Panel>
  );
}

export default BookShow;
