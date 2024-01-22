import classes from "./EmptyTabComponent.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type EmptyTabComponentProps = {
  image: string;
  firstParagraph: string;
  secondParagraph?: string;
  route: string;
  buttontext: string;
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
  header,
  showButton = true,
  imageHeight = 184,
}: EmptyTabComponentProps) => {
  // Router
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <img src={image} alt={firstParagraph} style={{ maxHeight: imageHeight }} />
      <div>
        <h4>{header}</h4>
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
      </div>
      {showButton &&
        <Button
          onClick={() => {
            navigate(route);
          }}
        >
          <span>{buttontext}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M13.25 6.5L16.25 9.5M16.25 9.5L13.25 12.5M16.25 9.5L2.75 9.5"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      }
    </section>
  );
};

export default EmptyTabComponent;
