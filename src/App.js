import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      label: "Label 1 ",
      content:
        "Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 ",
    },
    {
      label: "Label 2 ",
      content:
        "Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 Content 2 ",
    },
    {
      label: "Label 3 ",
      content:
        "Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 ",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
