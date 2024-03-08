import { appsLinks, componentsLinks } from "../../data/menu";
import Link from "../reusable/Link";

const SideBar = () => {
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      <div className="flex flex-col">
        <h1 className="font-bold text-blue-700 pb-3 underline uppercase">
          Apps
        </h1>
        {appsLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-purple-500 text-purple-500  pl-2"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-blue-700 pb-3 underline uppercase">
          Components
        </h1>
        {componentsLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-purple-500 text-purple-500 pl-2"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
