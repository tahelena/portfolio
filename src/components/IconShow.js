import { useState } from "react";
import '../styles/IconShow.css'
import {
  FaCat,
  FaSun,
  FaDog,
  FaCloud,
  FaBell,
  FaHouse,
  FaHeart
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
const [clicks, setClicks]=useState(0)
  const Icon = iconMap[type];

  const handleClick=()=>setClicks(clicks+1)
  return (
    <div className="icon-show" onClick={handleClick}>
      <Icon className='icon' />
      <FaHeart className='heart' size={`${10+10*clicks}px`}/>
    </div>
  );
};

export default IconShow;
