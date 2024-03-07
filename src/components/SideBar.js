import Link from "./reusable/Link";

const SideBar = () => {
  const links = [
    { name: "Accordion", path: "/components/accordion" },
    { name: "Buttons", path: "/components/buttons" },
    { name: "Counter", path: "/components/counter" },
    { name: "Counter Reducer", path: "/components/counter-reducer" },
    { name: "Dropdown", path: "/components/dropdown" },
    { name: "Modal", path: "/components/modal" },
    { name: "Table", path: "/components/table" },
  ];

  const apps=[
    {name:'Movies and Songs Playlist',path:'/apps/movie-song'},
    {name:'Expense',path:'/apps/expense'},
    {name:'Books',path:'/apps/books'},
  ];
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
    <div className="flex flex-col">
      <h1 className="font-bold text-blue-700 pb-3 underline">Components</h1>
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
      <div className="flex flex-col">
      <h1 className="font-bold text-blue-700 pb-3 underline">Apps</h1>
      {apps.map((link, idx) => (
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
    </div>
  );
};
export default SideBar;
