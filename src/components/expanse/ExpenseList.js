import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { removeListItem } from "../../store";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const { list, name } = useSelector(({ form, list: { data, searchTerm } }) => {
    const filteredList = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { list: filteredList, name: form.name };
  }, shallowEqual);

  const handleItemDelete = (item) => {
    dispatch(removeListItem(item.id));
  };
  return (
    <div className="items-list">
      {list.map((item) => {
        const bold =
          name && item.name.toLowerCase().includes(name.toLowerCase());
        return (
          <div className={`panel ${bold && "bold"}`} key={item.id}>
            <p>
              {item.name} - ${item.cost}
            </p>
            <button
              className="button is-danger"
              onClick={() => handleItemDelete(item)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;
