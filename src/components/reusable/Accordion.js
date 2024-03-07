import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
const Accordion = ({ items }) => {
  const [expandedIdx, setExpandedIdx] = useState(-1);
  return (
    <div>
      {items.map((item, idx) => {
        const isExpanded = idx === expandedIdx;
        const handleClick = (idx) => {
          setExpandedIdx((current) => (current === idx ? -1 : idx));
        };
        return (
          <div key={idx} className="border-x border-t rounded">
            <div
              className="p-3 bg-gray-50 border-b items-center cursor-pointer flex flex-row gap-2 justify-between"
              onClick={() => handleClick(idx)}
            >
              {" "}
              {item.label}
              <span>{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
