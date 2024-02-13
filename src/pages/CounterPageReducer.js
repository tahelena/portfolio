import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
import reducer_count, {
  ADD_VALUE_TO_COUNT,
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  SET_VALUE_TO_ADD,
} from "../reducer/reducer-count";

const CounterPageReducer = ({ initialCount }) => {
  // ------- wrapped reducer_count with produce to use immer library
  const [state, dispatch] = useReducer(produce(reducer_count), {
    count: initialCount,
    valueToAdd: 0,
  });
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  const increment = () => dispatch({ type: INCREMENT_COUNT });
  const decrement = () => dispatch({ type: DECREMENT_COUNT });
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row gap-2">
        <Button success outline onClick={increment}>
          Increment
        </Button>
        <Button danger outline onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button primary outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPageReducer;
