import { BiSearchAlt2 } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import { IoDocumentOutline } from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";

const en = {
  navbar: {
    home: "home",
    services: "services",
    about_us: "about us",
    universities: "universities",
    faqs: "FAQS",
    contact: "contact us",
  },
  hero: {
    header1: "welcome to",
    header2: "We will help with everytoing you need to study in russia",
    button1: "universities",
    button2: "services",
  },
  services: {
    header: "services",
    question: "what services we offer ?",
    items: [
      {
        id: 1,
        name: "search",
        description:
          "Through the website, you can search for the appropriate university for you, as it allows you to search depending on: university level, college, major, price, city, language",
      },
      {
        id: 2,
        name: "ask",
        description:
          "You can contact us through social networking sites, e-mail, phone and ask questions. In the future, you will be able to communicate through the site",
      },
      {
        id: 3,
        name: "applyment",
        description:
          "We will submit the necessary papers to the desired university from the student and register the student",
      },
      {
        id: 4,
        name: "translation",
        description:
          "We will translate the necessary documents into Russian, such as the passport and school certificate",
      },
      {
        id: 5,
        name: "Welcoming",
        description:
          "We will receive the student at the airport, take him to the university residence, and complete the remaining university transactions with him",
      },
      {
        id: 6,
        name: "other",
        description:
          "We will help the students to do all the non-university transactions and supplies they need, such as exams, phone cards and bank account",
      },
    ],
  },
  about_us: {
    header: "about us",
    question: "Who are we ?",
    text: "We noticed that foreign students face difficulties applying to russian universities.Moreover, in the past two years many robbery are reported.And this is the main reason that made us consider establishing Explore Russia. Explore russia help students choose their dream college and apply to it without any fears to be robbered",
  },
  universities: {
    header: "universities",
    question: "Which university you should choose ?",
    form: {
      degree: "degree",
      spacialization: "spacialization",
      price: "price",
      city: "city",
      langauge: "langauge",
    },
    university: {
      name: "name",
      deadline: "deadline",
      course:"course",
      price: "price",
      code: "code",
      language: "language",
      degree:"degree",
      city:"city",
    },
  },
  FAQS: {
    header: "FAQS",
    question: "Do you have any question ? ",
    items: [
      {
        question: " How does the registration process work ?",
        answer:
          "After the student chooses the desired university and sends the necessary documents, we apply to the university. After the university’s approval, the university may request half the amount of the academic year to send the study invitation, which is necessary to obtain a visa.",
      },
      {
        question: "What is the study invitation and when will it arrive ?",
        answer:
          "The study invitation is a request from the university to the Russian embassy to give the student a study visa that enables him to enter Russia without which the student cannot obtain a visa and thus cannot enter Russia. Usually, the invitation is ready within a month of university admission.",
      },
      {
        question: "What are the best universities to study ?",
        answer:
          "Depends on the specialization. There are universities specialized in studying medicine, and there are others specialized in studying engineering, but in general the best universities are found in large cities such as St. Petersburg and Moscow",
      },
      {
        question: "How much money does a student need to live in Russia ?",
        answer:
          "Depends on the city and the student's way of living, but in general 250-350 dollars a month is enough to live",
      },
      {
        question: "What are the best cities to study and live in ?",
        answer: "Saint Petersburg, Moscow and Kazan are the best in order.",
      },
    ],
  },
  contacts: {
    header: "contact us",
    question: "How can you contact us ?",
    items: [
      {
        id: 1,
        name: "email",
        content: "exp.russia@gmail.com",
      },
      {
        id: 1,
        name: "telephone",
        content: "exp.russia@gmail.com",
      },
      {
        id: 1,
        name: "location",
        content: "exp.russia@gmail.com",
      },
    ],
  },
  footer: {
    links: {
      name: "links :",
      items: {
        home: "home",
        universities: "universities",
        services: "services",
      },
    },
    contact: {
      name: "contacts :",
    },
    about: {
      socail_media: "socail media :",
      text: "We will help with everytoing you need to study in russia",
    },
  },
};

export default en;
