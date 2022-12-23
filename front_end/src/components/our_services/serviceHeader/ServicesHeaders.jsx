import React from "react";
import './serviceHeader.css'
const ServicesHeaders = ({
  services,
  chosenService,
  setchosenService,
}) => {
  return (
    <div className="tab-headers">
      {services.map((service, index) => {
        return (
          <p
            key={index}
            className={`tab-head ${chosenService === index ? "active-tab-head" : ""}`}
            onClick={() => setchosenService(index)}
          >
            {service.name}
          </p>
        );
      })}
    </div>
  );
};

export default ServicesHeaders;
