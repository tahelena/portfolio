import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOption = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value?.label || "Select"}{" "}
        <span>{isOpen ? <FaChevronDown /> : <FaChevronUp />}</span>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">
          {options.map((option) => (
            <div
              className="hover:bg-sky-100 rounded cursos-pointer p-1"
              key={option.value}
              onClick={() => handleOption(option)}
            >
              {option.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
