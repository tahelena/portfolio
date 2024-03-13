import { useEffect } from "react";

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
      <button className="button delete-button" onClick={handleDelete}>
        Delete Selected
      </button>
      <div className="pagination">
        <button
          className={`first-page button ${page === 1 ? "button inactive-button" : "button"} `}
          onClick={handleFirstPage}
        >
          &laquo;
        </button>
        <button
          className={`previous-page button ${page === 1 ? "button inactive-button" : "button"} `}
          onClick={handleBackPage}
        >
          &#8249;
        </button>
        {range.map((el, index) => (
          <button
            key={index}
            className={`${page === el ? "button active-button" : "button"}`}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ))}
        <button
          className={`next-page  ${page === range[range.length - 1] ? "button inactive-button" : "button"} `}
          onClick={handleNextPage}
        >
          &#8250;
        </button>
        <button
          className={`last-page  ${page === range[range.length - 1] ? "button inactive-button" : "button"} `}
          onClick={handleLastPage}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
