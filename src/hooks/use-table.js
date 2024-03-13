import { useState, useEffect } from "react";

const calculateRange = (data) => {
  const range = [];
  const num = Math.ceil(data.length / 10);
  let i = 1;
  for (i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page) => {
  return data.slice((page - 1) * 10, page * 10);
};

const useTable = (data, page) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data);
    setTableRange([...range]);

    const slice = sliceData(data, page);
    setSlice([...slice]);
  }, [data, page]);
  return { slice, range: tableRange };
};

export default useTable;
