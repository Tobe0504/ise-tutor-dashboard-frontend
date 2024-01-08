import classes from "./HelloUser.module.css";
import Button from "../Button/Button";

type HelloUserProps = {
  notIncludePay?: boolean;
  notIncludeBg?: boolean;
  notIncludeParagraph?: boolean;
};

const HelloUser = ({
  notIncludePay,
  notIncludeBg,
  notIncludeParagraph,
}: HelloUserProps) => {
  return (
    <div
      className={classes.helloUser}
      style={notIncludeBg ? { background: "#664efe" } : undefined}
    >
      <h2>Hi Amirah, welcome</h2>
      {!notIncludeParagraph && (
        <p>
          We are thrilled to have you as part of our esteemed team of educators.{" "}
        </p>
      )}
      {!notIncludePay && <Button type="tertiary">Pay now</Button>}
    </div>
  );
};

export default HelloUser;
