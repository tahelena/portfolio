import { useState } from "react";
import "../../style/SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label> Search for images</label>
        <input onChange={(e) => setTerm(e.target.value)} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
