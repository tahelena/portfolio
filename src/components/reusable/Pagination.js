import { useEffect } from "react";
import Button from "./Button";

const Pagination = ({ range, setPage, page, slice, onDelete }) => {
  const handleFirstPage = () => {
    setPage(1);
  };
  const handleLastPage = () => {
    setPage(range.length);
  };
  const handleBackPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (page !== range.length) {
      setPage(page + 1);
    }
  };
  const handleDelete = () => {
    onDelete();
  };

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className="footer">
      {
        <Button rounded danger onClick={handleDelete}>
          Delete Selected
        </Button>
      }
      <div className="flex justify-center">
        <Button
          className={`first-page px-4 py-1 ${page === 1 ? " inactive-button" : ""} `}
          onClick={handleFirstPage}
        >
          &laquo;
        </Button>
        <Button
          className={`previous-page px-4 py-1  ${page === 1 ? " inactive-button" : ""} `}
          onClick={handleBackPage}
        >
          &#8249;
        </Button>
        {range.map((el, index) => (
          <Button
            key={index}
            className={`px-4 py-1 ${page === el ? " active-button" : ""}`}
            onClick={() => setPage(el)}
          >
            {el}
          </Button>
        ))}
        <Button
          className={`next-page px-4 py-1  ${page === range[range.length - 1] ? " inactive-button" : ""} `}
          onClick={handleNextPage}
        >
          &#8250;
        </Button>
        <Button
          className={`last-page px-4 py-1  ${page === range[range.length - 1] ? " inactive-button" : ""} `}
          onClick={handleLastPage}
        >
          &raquo;
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
