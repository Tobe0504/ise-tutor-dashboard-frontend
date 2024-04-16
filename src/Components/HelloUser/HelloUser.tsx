import classes from "./HelloUser.module.css";
import Button from "../Button/Button";

type HelloUserProps = {
  header: string | undefined;
  paragraph: string;
  notIncludePay?: boolean;
  notIncludeBg?: boolean;
  notIncludeParagraph?: boolean;
};

const HelloUser = ({
  header,
  paragraph,
  notIncludePay,
  notIncludeBg,
  notIncludeParagraph,
}: HelloUserProps) => {
  return (
    <div
      className={classes.helloUser}
      style={notIncludeBg ? { background: "#664efe" } : undefined}
    >
      <h1>{header}</h1>
      {!notIncludeParagraph && (
        <p>
          {paragraph}
        </p>
      )}
      {!notIncludePay && <Button type="tertiary">Pay now</Button>}
    </div>
  );
};

export default HelloUser;
