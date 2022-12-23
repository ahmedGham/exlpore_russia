import React from "react";
import Section from "../../components/UI/section/Section";
import { useTranslation } from "react-i18next";
import './about.css'
const About = () => {
    const { t } = useTranslation();

  return (
    <Section
      title={t("about_us.header")}
      question={t("about_us.question")}
      className="about-us about"
    >
      <p className="about-us-text">{t("about_us.text")}</p>
    </Section>
  );
};

export default About;
