import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...props
}) => {
  const classes = twMerge(
    classnames(props.className, "px-3  border w-auto", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-blue-300 bg-blue-300 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-orange-500 bg-orange-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-blue-300": outline && secondary,
      "text-green-500": outline && success,
      "text-orange-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1)
      return new Error(
        "Provided more than one button type, please revise your code."
      );
  },
};

export default Button;
