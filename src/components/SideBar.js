import Link from "./Link";

const SideBar = () => {
  const links = [
    { name: "Accordion", path: "/accordion" },
    { name: "Buttons", path: "/buttons" },
    { name: "Dropdown", path: "/dropdown" },
    { name: "Modal", path: "/modal" },
  ];
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.path}
          className="mb-3"
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default SideBar;
