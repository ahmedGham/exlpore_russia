import React from "react";
import Layout from "./components/layout/layout/Layout";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Courses from "./sections/coursesSection/Courses";
import Faqs from "./sections/faqs/Faqs";
import Hero from "./sections/hero/Hero";
import Services from "./sections/services/Services";

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <About />
        <Courses />
        <Faqs />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
