import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";
import ExpenseSearch from "../components/expense/ExpenseSearch";
import ExpenseValue from "../components/expense/ExpenseValue";
const ExpensePage = () => {
  return (
    <div className="container is-fluid">
      <ExpenseForm />
      <ExpenseSearch />
      <ExpenseList />

      <ExpenseValue />
    </div>
  );
};

export default ExpensePage;
