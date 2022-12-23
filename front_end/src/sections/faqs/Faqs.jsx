import React from "react";
import FAQList from "../../components/FAQs/FAQList/FAQList";
import Section from "../../components/UI/section/Section";
import { useTranslation } from "react-i18next";
import './faqs.css'
const Faqs = () => {
  const { t } = useTranslation();
  const faqs = t("FAQS.items", { returnObjects: true });
  return (
    <Section
      title={t("FAQS.header")}
      question={t("FAQS.question")}
      className="FAQs"
    >
      <FAQList faqs={faqs} />
    </Section>
  );
};

export default Faqs;
