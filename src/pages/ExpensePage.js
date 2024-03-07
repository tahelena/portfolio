import ExpenseForm from "../components/expanse/ExpenseForm";
import ExpenseList from "../components/expanse/ExpenseList";
import ExpenseSearch from "../components/expanse/ExpenseSearch";
import ExpenseValue from "../components/expanse/ExpenseValue";
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
  
  export default ExpensePage
;