import React from 'react'
import { useTranslation } from 'react-i18next';
import './serviceItem.css'
const Service = ({ services, chosenService }) => {
  return (
    <div className="service">
      {/* ${i18n.language === "ar" ? "ar" : ""} */}
      <div className={`service-header`}>
        <div className="service-icon">{services[chosenService].icon}</div>
        <h2 className="service-title">{services[chosenService].name}</h2>
      </div>
      <p className="service-description">
        {services[chosenService].description}
      </p>
    </div>
  );
};

export default Service