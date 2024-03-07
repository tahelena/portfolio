import classnames from "classnames";

const Panel = ({ children, className, ...props }) => {
  const finalClassNames = classnames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...props} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
