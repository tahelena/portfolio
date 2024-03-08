import { useState } from "react";
import Panel from "../reusable/Panel";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <Panel className="mb-4">
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input
          className="border"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder="Search for images"
        />
      </form>
    </Panel>
  );
};

export default SearchBar;
