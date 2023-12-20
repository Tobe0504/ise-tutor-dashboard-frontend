import React from "react";
import Button from "../../Components/Button/Button";
import FAQDropdown from "../../Components/FAQDropdown/FAQDropdown";
import classes from "./SupportFaqs.module.css";

const SupportFaqs = () => {
  const faqs = [
    {
      question: "How can I upload course materials to the platform?",
      answer: "",
    },

    {
      question: "Can I customise the appearance of my course on the platform?",
      answer: "",
    },
    {
      question: "Where can I find information about a specific student?",
      answer: "",
    },
    {
      question: "How can I schedule a tutoring session with a student?",
      answer: "",
    },
    {
      question: "What types of files can I upload as study resources for my students?",
      answer: "",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>Explore Frequently asked questions</h4>
        <div>
          {faqs.map((data, i) => {
            return (
              <div key={i} className={classes.faq}>
                <FAQDropdown question={data.question} answer={data.answer} />
              </div>
            );
          })}
        </div>

        <div className={classes.viewMore}>
          <Button type="null">View more</Button>
        </div>
      </div>
    </div>
  );
};

export default SupportFaqs;
