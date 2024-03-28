import classes from "./EmptyTabComponent.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type EmptyTabComponentProps = {
  image: string;
  firstParagraph: string;
  secondParagraph?: string;
  route: string;
  buttontext: string;
  buttonSvg?: ReactNode;
  buttonType?: "invalid" | "delete" | "primary" | "secondary" | "black" | "white" | "null" | "tertiary" | undefined;
  showButton?: boolean;
  header?: string;
  imageHeight?: number;
};

const EmptyTabComponent = ({
  image,
  firstParagraph,
  secondParagraph,
  route,
  buttontext,
  buttonType,
  buttonSvg,
  header,
  showButton = true,
  imageHeight,
}: EmptyTabComponentProps) => {
  // Router
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <img src={image} alt={header} style={{ height: imageHeight }} />
      <div>
        <h4>{header}</h4>
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
      </div>
      {showButton &&
        <Button
          type={buttonType}
          onClick={() => {
            navigate(route);
          }}
        >
          <span>{buttontext}</span>
          {buttonSvg}
        </Button>
      }
    </section>
  );
};

export default EmptyTabComponent;
