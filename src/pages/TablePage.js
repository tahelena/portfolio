import SortableTable from "../components/reusable/SortableTable";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Red", color: "bg-red-500", score: 2 },
    { name: "Yellow", color: "bg-yellow-500", score: 3 },
    { name: "Green", color: "bg-green-500", score: 6 },
    { name: "Pink", color: "bg-pink-500", score: 1 },
    { name: "Purple", color: "bg-purple-500", score: 4 },
    { name: "Blue", color: "bg-blue-500", score: 7 },
  ];

  const config = [
    {
      label: "Name",
      render: (item) => item.name,
      sortValue: (item) => item.name,
    },
    {
      label: "Color",
      render: (item) => <div className={`p-3 m-2 rounded ${item.color}`}></div>,
    },
    {
      label: "Score",
      render: (item) => item.score,
      sortValue: (item) => item.score,
    },
  ];

  const keyFn = (item) => item.name;
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
