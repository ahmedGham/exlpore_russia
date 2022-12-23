import React from "react";

const ContactItem = ({ icon, name, content }) => {
  return (
    <div className="contact-card">
      <div className="icon-container">{icon}</div>
      <h4 className="contact-name">{name}</h4>
      <p className="contact-content">{content}</p>
    </div>
  );
};

export default ContactItem;
