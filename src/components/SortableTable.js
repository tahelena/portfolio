import { useState } from "react";
import Table from "./Table";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center gap-2">
            {column.label}
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      return typeof valueA === "string"
        ? valueA.localeCompare(valueB) * reverseOrder
        : (valueA - valueB) * reverseOrder;
    });
  }
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
