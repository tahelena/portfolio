import { useState } from "react";
import IconShow from "./components/IconShow";
import './App.css';
const getRandomIcon = () => {
  const icons = ["cat", "sun", "dog", "cloud", "bell", "house"];
  return icons[Math.floor(Math.random() * icons.length)];
};

const App = () => {
  const [icons, setIcons] = useState([]);
  const handleClick = () => {
    setIcons([...icons, getRandomIcon()]);
  };
  const renderedIcons = icons.map((icon, index) => (
    <IconShow type={icon} key={index} />
  ));
  return (
    <div className="app">
      <button onClick={handleClick}>Add icon</button>
      <div className="icons-list">{renderedIcons}</div>
    </div>
  );
};

export default App;
