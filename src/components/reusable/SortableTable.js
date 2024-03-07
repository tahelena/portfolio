import Table from "../Table";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import useSort from "../../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, sortColumn } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => sortColumn(column.label)}
        >
          <div className="flex items-center gap-2">
            {column.label}
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <FaChevronUp size="0.75rem" /> <FaChevronDown size="0.75rem" />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <FaChevronUp size="0.75rem" /> <FaChevronDown size="0.75rem" />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <FaChevronUp size="0.75rem" />;
  } else if (sortOrder === "desc") {
    return <FaChevronDown size="0.75rem" />;
  }
};

export default SortableTable;
