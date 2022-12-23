import React from "react";
import ContactList from "../../components/contacts/ContactList";
import Section from "../../components/UI/section/Section";
import {useTranslation} from 'react-i18next'
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useMemo } from "react";
import './contact.css'
const Contact = () => {
  const {t} = useTranslation();
  const contacts = useMemo(()=>addContactIcon(t('contacts.items',{returnObjects:true})),[t])
  console.log(contacts)
  return (
    <Section
      title={t("contacts.header")}
      question={t("contacts.question")}
      className="contact"
    >
      <ContactList contacts={contacts} />
    </Section>
  );
};


const addContactIcon = (contacts)=>{
  return [
    {
      ...contacts[0],
      icon: <MdEmail className="contact-icon" />,
    },
    {
      ...contacts[1],
      icon: <BsFillTelephoneFill className="contact-icon" />,
    },
    {
      ...contacts[2],
      icon: <MdLocationPin className="contact-icon" />,
    },
  ];
}

export default Contact;
