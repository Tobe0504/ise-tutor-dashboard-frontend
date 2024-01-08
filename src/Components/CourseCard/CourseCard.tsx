import classes from "./CourseCard.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CourseCardProps = {
  title: string;
  image: string;
  description: string;
  duration?: number | string;
  paid?: boolean | undefined;
  route?: string;
  ratings?: number;
};

const CourseCard = ({
  title,
  image,
  description,
  duration,
  ratings,
}: CourseCardProps) => {
  // States
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Router
  const navigate = useNavigate();

  // Utils
  const ratingsArray = [1, 2, 3, 4, 5];

  return (
    <div className={classes.container}>
      <img src={image} alt="School" />
      <div className={classes.textSection}>
        <div className={classes.bookmarkSection}>
          <span>Beginners</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                fill="#2E2E2E"
              />
            </svg>
            <span>16 w</span>
          </span>
          <span
            onClick={() => {
              setIsBookmarked((prevState) => {
                return !prevState;
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isBookmarked ? "#664efe" : "none"}
            >
              <path
                d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z"
                stroke="#664EFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <h6>{title}</h6>
        <p>{description}</p>
        <p>{duration}</p>
        <div className={classes.ratingSection}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.1548 4.35418C12.8972 3.52375 13.9833 3 15.1934 3C17.431 3 19.2449 4.79086 19.2449 7C19.2449 9.20914 17.431 11 15.1934 11C13.9833 11 12.8972 10.4762 12.1548 9.64582M15.1934 21H3.03906V20C3.03906 16.6863 5.7599 14 9.11623 14C12.4726 14 15.1934 16.6863 15.1934 20V21ZM15.1934 21H21.2706V20C21.2706 16.6863 18.5497 14 15.1934 14C14.0865 14 13.0487 14.2922 12.1548 14.8027M13.1677 7C13.1677 9.20914 11.3538 11 9.11623 11C6.87868 11 5.06479 9.20914 5.06479 7C5.06479 4.79086 6.87868 3 9.11623 3C11.3538 3 13.1677 4.79086 13.1677 7Z"
                stroke="#2E2E2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>1,354</span>
          </div>

          <div>
            <span>
              {ratingsArray.map((data) => {
                if ((ratings as number) >= data) {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      key={data}
                    >
                      <g clipPath="url(#clip0_8097_3185)">
                        <path
                          d="M9.46 2.88591C9.76165 1.96943 11.0581 1.96943 11.3597 2.88591L12.4579 6.22222C12.5929 6.63239 12.9759 6.90957 13.4077 6.90958L16.9334 6.90971C17.9052 6.90975 18.3059 8.15581 17.5163 8.72226L14.6861 10.7526C14.3311 11.0072 14.1825 11.4628 14.3191 11.8777L15.4052 15.1784C15.7076 16.0975 14.6587 16.8675 13.8725 16.3036L10.9927 14.238C10.6443 13.9882 10.1754 13.9882 9.82703 14.238L6.94728 16.3036C6.16108 16.8675 5.11213 16.0975 5.41455 15.1784L6.50067 11.8777C6.63721 11.4628 6.48862 11.0072 6.13367 10.7526L3.30346 8.72226C2.51384 8.15581 2.91454 6.90975 3.88632 6.90971L7.41204 6.90958C7.84385 6.90957 8.22688 6.63239 8.36188 6.22222L9.46 2.88591Z"
                          fill="#F2B414"
                          stroke="#F2B414"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8097_3185">
                          <rect
                            width="20.2572"
                            height="20"
                            fill="white"
                            transform="translate(0.28125)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  );
                } else {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      key={data}
                    >
                      <g clipPath="url(#clip0_8097_3191)">
                        <path
                          d="M9.31156 2.88591C9.61321 1.96943 10.9097 1.96943 11.2113 2.88591L12.3094 6.22222C12.4444 6.63239 12.8274 6.90957 13.2593 6.90958L16.785 6.90971C17.7568 6.90975 18.1575 8.15581 17.3678 8.72226L14.5376 10.7526C14.1827 11.0072 14.0341 11.4628 14.1706 11.8777L15.2568 15.1784C15.5592 16.0975 14.5102 16.8675 13.724 16.3036L10.8443 14.238C10.4959 13.9882 10.027 13.9882 9.67859 14.238L6.79884 16.3036C6.01265 16.8675 4.96369 16.0975 5.26611 15.1784L6.35223 11.8777C6.48877 11.4628 6.34018 11.0072 5.98524 10.7526L3.15502 8.72226C2.36541 8.15581 2.7661 6.90975 3.73788 6.90971L7.26361 6.90958C7.69541 6.90957 8.07844 6.63239 8.21344 6.22222L9.31156 2.88591Z"
                          stroke="#F2B414"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8097_3191">
                          <rect
                            width="20.2572"
                            height="20"
                            fill="white"
                            transform="translate(0.132812)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  );
                }
              })}
            </span>
            <span>{ratings}.0(56)</span>
          </div>
        </div>
        <div className={classes.price}>NGN 60,000</div>
        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              navigate("/courses/courseId");
            }}
          >
            View Details
          </Button>
          <Button
            onClick={() => {
              navigate("/eligibility");
            }}
          >
            Apply now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
