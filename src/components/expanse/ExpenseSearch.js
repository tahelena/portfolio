import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";

const ExpenseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.list.searchTerm);
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="mb-0 text-xl">My Items</h3>
      <div className="flex items-end">
        <label className="mb-0 mr-1">Search</label>
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
