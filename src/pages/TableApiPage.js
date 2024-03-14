import { createRef, useEffect, useState } from "react";
import useTable from "../hooks/use-table";
import Pagination from "../components/reusable/Pagination";
import { FaPencilAlt, FaSave, FaTrashAlt } from "react-icons/fa";
import Button from "../components/reusable/Button";

const UserTablePage = () => {
  const [column, setColumn] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(rows);
  const { slice, range } = useTable(filteredData, page);
  const [toEditMember, setToEditMember] = useState(null);
  const [memberState, setMemberState] = useState(null);
  const [selected, setSelected] = useState([]);
  const selectAll = createRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setRows(data.users);
        setColumn(Object.keys(data.users[0]).filter((i) => i !== "id"));
        setFilteredData(data.users);
      })
      .catch((err) => console.log(err));
  };

  const config = [
    {
      label: "First Name",
      render: (item) => item.firstName,
      sortValue: (item) => item.firstName,
    },
    {
      label: "Last Name",
      render: (item) => item.lastName,
      sortValue: (item) => item.lastName,
    },
    {
      label: "City",
      render: (item) => item.address.city,
      sortValue: (item) => item.address.city,
    },
    {
      label: "Blood Group",
      render: (item) => item.bloodGroup,
      sortValue: (item) => item.bloodGroup,
    },
    {
      label: "Age",
      render: (item) => item.age,
      sortValue: (item) => item.age,
    },
  ];

  const filterData = (searchTerm) => {
    if (searchTerm.length !== 0) {
      const filteredData = column.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(column);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const handleEdit = (id) => {
    setToEditMember(id);
    setMemberState(column.find((i) => i.id === id));
  };

  const handleChange = (e) => {
    setMemberState({
      ...memberState,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = () => {
    const editedRow = column.map((member, i) => {
      if (memberState.id === member.id) {
        return memberState;
      }
      return member;
    });
    setFilteredData(editedRow);
    setColumn(editedRow);
    setToEditMember(null);
  };

  const handleDelete = (id) => {
    const newList = column.filter((el) => el.id !== id);
    setFilteredData(newList);
    setColumn(newList);
  };

  const handleSelectAll = (e) => {
    e.target.checked ? setSelected(slice.map((i) => i.id)) : setSelected([]);
  };

  const handleSelectChange = (e, id) => {
    e.target.checked
      ? setSelected([...selected, id])
      : setSelected(selected.filter((i) => i !== id));
  };

  const handleDeleteSelected = () => {
    const newList = column.filter((el) => !selected.includes(el.id));
    setFilteredData(newList);
    setColumn(newList);
    selectAll.current.checked = false;
  };

  return (
    <div>
      <div>
        <input
          className="border w-full"
          type="text"
          placeholder="Search by name, email or role."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-left">
              <input
                type="checkbox"
                className="form-check-input table-checkbox"
                name="select all"
                ref={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            {config.map((title, i) => (
              <th className="text-left" key={i}>
                {title.label}
              </th>
            ))}
            <th className="text-left">Actions</th>
          </tr>
          {slice.map((row, i) =>
            row.id === toEditMember ? (
              <tr key={i}>
                <td className="h-8 py-2"> </td>
                <td className="h-8 py-2">
                  <input
                    name="firstName"
                    type="text"
                    value={memberState.firstName}
                    onChange={handleChange}
                  />
                </td>
                <td className="h-8 py-2">
                  <input
                    name="lastName"
                    type="text"
                    value={memberState.lastName}
                    onChange={handleChange}
                  />
                </td>
                <td className="h-8 py-2">
                  <input
                    name="city"
                    type="text"
                    value={memberState.lastName}
                    onChange={handleChange}
                  />
                </td>
                <td className="h-8 py-2">
                  <input
                    name="bloodGroup"
                    type="text"
                    value={memberState.bloodGroup}
                    onChange={handleChange}
                  />
                </td>
                <td className="h-8 py-2">
                  <input
                    name="age"
                    type="number"
                    value={memberState.age}
                    onChange={handleChange}
                  />
                </td>
                <td className="h-8 py-2">
                  <button
                    className="action-icons save"
                    onClick={() => handleSubmit()}
                  >
                    <FaSave />
                  </button>
                </td>
              </tr>
            ) : (
              <tr
                className={
                  selected.includes(row.id)
                    ? " table-row-items checked"
                    : "table-row-items"
                }
                key={i}
              >
                <td className="h-8 py-2">
                  <input
                    type="checkbox"
                    className="form-check-input table-checkbox"
                    name="select"
                    id={row.id}
                    checked={selected.includes(row.id)}
                    onChange={(e) => handleSelectChange(e, row.id)}
                  />
                </td>
                <td className="h-8 py-2 firstName">{row.firstName}</td>
                <td className="h-8 py-2 lastName">{row.lastName}</td>
                <td className="h-8 py-2 city">{row.address.city}</td>
                <td className="h-8 py-2 bloodGroup">{row.bloodGroup}</td>
                <td className="h-8 py-2 age">{row.age}</td>

                <td className="h-8 py-2 actions">
                  <Button
                    rounded
                    warning
                    className="py-2"
                    onClick={() => handleEdit(row.id)}
                  >
                    <FaPencilAlt />
                  </Button>
                  <Button
                    rounded
                    danger
                    className="py-2"
                    onClick={() => handleDelete(row.id)}
                  >
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination
        setPage={setPage}
        page={page}
        range={range}
        slice={slice}
        onDelete={handleDeleteSelected}
      />
    </div>
  );
};
export default UserTablePage;
