import { useState } from "react";
import Button from "../components/reusable/Button";
import Panel from "../components/reusable/Panel";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
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
          value={valueToAdd || ""}
          onChange={handleChange}
        />
        <Button primary outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
