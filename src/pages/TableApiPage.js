import { createRef, useEffect, useState } from "react";
import SortableTable from "../components/reusable/SortableTable";
import useTable from "../hooks/use-table";

const UserTablePage = () => {
  const [data, setData] = useState();
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
        setData(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const keyFn = (user) => user.id;
  const filterData = (searchTerm) => {
    if (searchTerm.length !== 0) {
      const filteredData = rows.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(rows);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  // const handleEdit = (index) => {
  //   setToEditMember(index);
  //   setMemberState(rows.find((i) => i.id === index));
  // };

  // const handleChange = (e) => {
  //   setMemberState({
  //     ...memberState,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // };
  // const handleSubmit = () => {
  //   const editedRow = rows.map((member, i) => {
  //     if (memberState.id === member.id) {
  //       return memberState;
  //     }
  //     return member;
  //   });
  //   setFilteredData(editedRow);
  //   setRows(editedRow);
  //   setToEditMember(null);
  // };

  // const handleDelete = (id) => {
  //   const newList = rows.filter((el) => el.id !== id);
  //   setFilteredData(newList);
  //   setRows(newList);
  // };

  // const handleSelectAll = (e) => {
  //   e.target.checked ? setSelected(slice.map((i) => i.id)) : setSelected([]);
  // };

  // const handleSelectChange = (e, id) => {
  //   e.target.checked
  //     ? setSelected([...selected, id])
  //     : setSelected(selected.filter((i) => i !== id));
  // };

  // const handleDeleteSelected = () => {
  //   const newList = rows.filter((el) => !selected.includes(el.id));
  //   setFilteredData(newList);
  //   setRows(newList);
  //   selectAll.current.checked = false;
  // };
  return (
    <div>
      <div>
        <input
          className="table-search"
          type="text"
          placeholder="Search by name, email or role."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};
export default UserTablePage;
