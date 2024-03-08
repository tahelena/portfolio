import { useState } from "react";
import IconShow from "../components/IconShow";
import Button from "../components/reusable/Button";

const getRandomIcon = () => {
  const icons = ["cat", "sun", "dog", "cloud", "bell", "house"];
  return icons[Math.floor(Math.random() * icons.length)];
};

const RandomIconsPage = () => {
  const [icons, setIcons] = useState([]);
  const handleClick = () => {
    setIcons([...icons, getRandomIcon()]);
  };
  const renderedIcons = icons.map((icon, index) => (
    <IconShow type={icon} key={index} />
  ));
  return (
    <div>
      <div className="flex justify-center">
        <Button onClick={handleClick} primary rounded>
          Add icon
        </Button>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {renderedIcons}
      </div>
    </div>
  );
};

export default RandomIconsPage;
