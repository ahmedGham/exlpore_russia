import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { MdLocationPin } from "react-icons/md";
import ContactItem from './ContactItem';


// const contacts = [
//   {
//     id: 1,
//     name: "الايميل",
//     content: "exp.russia@gmail.com",
//     icon: <MdEmail className="contact-icon" />,
//   },
//   {
//     id: 2,
//     name: "الهاتف",
//     content: "+7313556578",
//     icon: <BsFillTelephoneFill className="contact-icon" />,
//   },
//   {
//     id: 3,
//     name: "الموقع",
//     content: "russia,sant-peter",
//     icon: <MdLocationPin className="contact-icon" />,
//   },
// ];

const ContactList = ({contacts}) => {
  return (
    <div className='contact-list'>
      {
        contacts.map((contact)=>{
          return (
            <ContactItem key={contact.id} {...contact}/>
          )
        })
      }
    </div>
  )
}

export default ContactList