import classes from './Button.module.css'
import { CircularProgress } from '@mui/material'

type ButtonPropTypes = {
<<<<<<< HEAD
    children: React.ReactNode
    type?:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'null'
        | 'invalid'
        | 'delete'
        | 'black'
        | 'white'
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    loading?: boolean
}

const Button = ({
    children,
    type,
    disabled,
    onClick,
    loading,
}: ButtonPropTypes) => {
    return (
        <button
            className={`${classes.button} ${
                type === 'secondary'
                    ? classes.secondary
                    : type === 'tertiary'
                    ? classes.tertiary
                    : type === 'null'
                    ? classes.null
                    : type === 'invalid'
                    ? classes.invalid
                    : type === 'delete'
                    ? classes.delete
                    : type === 'black'
                    ? classes.black
                    : type === 'white'
                    ? classes.white
                    : classes.primary
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? (
                <CircularProgress size="1.5rem" color="inherit" />
            ) : (
                children
            )}
        </button>
    )
}
=======
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
>>>>>>> master

export default Button
