import { useState } from "react";
import {
  FaCat,
  FaSun,
  FaDog,
  FaCloud,
  FaBell,
  FaHouse,
  FaHeart,
} from "react-icons/fa6";

const iconMap = {
  cat: FaCat,
  sun: FaSun,
  cloud: FaCloud,
  dog: FaDog,
  bell: FaBell,
  house: FaHouse,
};

const IconShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const Icon = iconMap[type];

  const handleClick = () => setClicks(clicks + 1);
  return (
    <div
      className="shadow-md m-2 relative border-slate-200 border rounded "
      onClick={handleClick}
    >
      <Icon className="w-50 h-50" size="10rem" />
      <FaHeart
        className="absolute bottom-0 right-0 text-red-500"
        size={`${10 + 10 * clicks > 160 ? 160 : 10 + 10 * clicks}px`}
      />
    </div>
  );
};

export default IconShow;
