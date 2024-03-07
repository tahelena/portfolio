import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const columns = config.map((column) =>
    column.header ? (
      <Fragment key={column.label}>{column.header()}</Fragment>
    ) : (
      <th key={column.label}>{column.label}</th>
    )
  );
  const rows = data.map((row) => {
    const cells = config.map((column) => (
      <td className="p-3" key={column.label}>
        {column.render(row)}
      </td>
    ));
    return (
      <tr className="border-b" key={keyFn(row)}>
        {cells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{columns}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
