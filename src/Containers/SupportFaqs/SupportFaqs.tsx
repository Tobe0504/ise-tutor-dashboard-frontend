import React from "react";
import Button from "../../Components/Button/Button";
import FAQDropdown from "../../Components/FAQDropdown/FAQDropdown";
import classes from "./SupportFaqs.module.css";

const SupportFaqs = () => {
  const faqs = [
    {
      question: "How can I upload course materials to the platform?",
      answer: `On your dashboard sidebar, select the option "Courses." You'll find the option to "Create course" and follow the steps to upload course materials.`,
    },

    {
      question: "Can I customise the appearance of my course on the platform?",
      answer: `Yes, you can customise your course appearance. Under the "Courses" option, you can customise the cover of your course with any picture of your choice.`,
    },
    {
      question: "Where can I find information about a specific student?",
      answer: `Visit the "Student" section to access all your student information. Click on the "View details" option for a more detailed information about each student.`,
    },
    {
      question: "How can I schedule a tutoring session with a student?",
      answer: `Head to the "Schedule" section on your dashboard, click on "Schedule Session," and follow the prompts.`,
    },
    {
      question: "What types of files can I upload as study resources for my students?",
      answer: `You can upload a variety of file types, including documents (PDFs, Word), videos, links, and more.`,
    },
    {
      question: "Is there a limit to the number of modules and lessons I can create in a course?",
      answer: ``,
    },
    {
      question: "What support is available if I need course design or content assistance?",
      answer: `You can contact the support team (support@iseEdtech.com) with specific descriptions of what you need help with, and a team member would reach out to you `,
    },
    {
      question: "How can I view feedback or reviews from students about my courses?",
      answer: `Access the "Feedback" section to see the reviews and feedback provided by your students`,
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
