import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addListItem, changeCost, changeName } from "../../store";
import Button from "../reusable/Button";

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
              className="border rounded border-slate-200"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="border rounded border-slate-200"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
          <div className="field">
            <Button success rounded>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
