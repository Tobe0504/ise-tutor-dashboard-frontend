import React from "react";
import Button from "../../Components/Button/Button";
import FAQDropdown from "../../Components/FAQDropdown/FAQDropdown";
import classes from "./SupportFaqs.module.css";

const SupportFaqs = () => {
  const faqs = [
    {
      question: "How do I enrol in a course on ise EdTech?",
      answer: "",
    },

    {
      question: "What support is available if I need help with course content?",
      answer: "",
    },
    {
      question: "How can I track my progress in a course?",
      answer: "",
    },
    {
      question: "What should I do if I forgot my password?",
      answer: "",
    },
    {
      question: "How can I access my course materials and assignments?",
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
