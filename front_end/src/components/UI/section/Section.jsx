import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../container/Container";
import './section.css'
const Section = ({ children, title, question, className}) => {
  const {i18n} = useTranslation();
  console.log(className)

  return (
    <section className={`section ${className}`}>
      <Container>
        <div className={`${i18n.language === "ar" ? "ar" : ""} section-header`}>
          <h4 className={`${i18n.language === "ar" ? "ar" : ""} title`}>{title}</h4>
          <p className={` ${i18n.language === "ar" ? "ar" : ""} question`}>{question}</p>
        </div>
        <div className="section-content">{children}</div>
      </Container>
    </section>
  );
};

export default Section;
