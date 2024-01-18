import classes from "./Button.module.css";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "null"
  | "invalid"
  | "delete"
  | "black"
  | "white"
  | "yellow";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, type, disabled, onClick }: ButtonPropTypes) => {
  return (
    <button
      className={`${classes.button} ${type === "secondary"
        ? classes.secondary
        : type === "tertiary"
          ? classes.tertiary
          : type === "null"
            ? classes.null
            : type === "invalid"
              ? classes.invalid
              : type === "delete"
                ? classes.delete
                : type === "black"
                  ? classes.black
                  : type === "white"
                    ? classes.white
                    : type === "yellow"
                      ? classes.yellow
                      : classes.primary
        }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
