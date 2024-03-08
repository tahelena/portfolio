import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";
import Button from "../reusable/Button";
import Panel from "../reusable/Panel";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <Panel className="book-create mt-4">
      <h3 className="text-xl">Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input mb-4" value={title} onChange={handleChange} />
        <Button primary>Create!</Button>
      </form>
    </Panel>
  );
}

export default BookCreate;
