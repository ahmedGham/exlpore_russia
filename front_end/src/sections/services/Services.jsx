import React, { useEffect, useMemo, useState } from "react";
import Section from "../../components/UI/section/Section";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import ServicesHeaders from "../../components/our_services/serviceHeader/ServicesHeaders";
import Service from "../../components/our_services/serviceItem/Service";
import './services.css'
const Services = () => {
  const { t, i18n } = useTranslation();
  const services = useMemo(
    () => addServicesIcons(t("services.items", { returnObjects: true })),
    [t]
  );
  const [chosenService, setchosenService] = useState(0);

  return (
    <Section
      title={t("services.header")}
      question={t("services.question")}
      className={`${i18n.language === "ar" ? "ar" : ""} services`}
      id="services"
    >
      <ServicesHeaders
        services={services}
        chosenService={chosenService}
        setchosenService={setchosenService}
        i18n={i18n}
      />

      <Service services={services} chosenService={chosenService} i18n={i18n} />
    </Section>
  );
};

const addServicesIcons = (servicesWithoutIcons) => {
  return [
    {
      ...servicesWithoutIcons[0],
      icon: <BiSearchAlt2 />,
    },
    {
      ...servicesWithoutIcons[1],
      icon: <BsQuestionLg />,
    },
    {
      ...servicesWithoutIcons[2],
      icon: <IoDocumentOutline />,
    },
    {
      ...servicesWithoutIcons[3],
      icon: <BsTranslate />,
    },

    {
      ...servicesWithoutIcons[4],
      icon: <BsPeople />,
    },
    {
      ...servicesWithoutIcons[5],
      icon: <AiFillThunderbolt />,
    },
  ];
};

export default Services;
