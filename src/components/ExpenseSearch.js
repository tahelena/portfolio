import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const ExpenseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.list.searchTerm);
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Items</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default ExpenseSearch;
