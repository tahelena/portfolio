import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addListItem, changeCost, changeName } from "../store";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  }, shallowEqual);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const costValue = parseInt(event.target.value) || 0;
    dispatch(changeCost(costValue));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addListItem({ name, cost }));
  };
  return (
    <div className="list-form panel">
      <h4 className="subtitle is-3">Add Expense</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
