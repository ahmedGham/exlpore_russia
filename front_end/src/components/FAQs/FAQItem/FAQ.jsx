import React from "react";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import './FAQ.css'
const FAQ = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (e) => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`faq-container ${isExpanded ? "active" : ""}`}
      onClick={(e) => handleClick(e)}
    >
      <div className="faq-header">
        <p className="faq">{question}</p>
        <MdOutlineArrowBackIosNew className="faq-arrow" />
      </div>
      <p className="faq-answer">{answer}</p>
    </div>
  );
};

export default FAQ;
