import React from "react";
import Container from "../../UI/container/Container";
import { Link } from "react-scroll";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoEarthSharp } from "react-icons/io5";
import "./header.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLangs, setShowLangs] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className={i18n.language === "ar" ? "ar header" : "header"}>
      <Container>
        <nav>
          <div className="navbar-icon-container">
            <GoThreeBars onClick={toggleExpand} className="navbar-icon" />
          </div>
          <ul className={`${isExpanded ? "active" : ""} link-list`}>
            <li>
              <div className="logo">
                <h2>Explore Russia</h2>
              </div>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="link"
                onClick={toggleExpand}
              >
                {t("navbar.home")}
              </Link>
            </li>

            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="link"
                onClick={toggleExpand}
              >
                {t("navbar.services")}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="link"
                onClick={toggleExpand}
              >
                {t("navbar.about_us")}
              </Link>
            </li>

            <li>
              <Link
                to="unevirsities"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="link"
                onClick={toggleExpand}
              >
                {t("navbar.universities")}
              </Link>
            </li>
            <li>
              <Link
                to="FAQs"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="link"
                onClick={toggleExpand}
              >
                {t("navbar.faqs")}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="link"
                onClick={toggleExpand}
              >
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
          <div className="trans-container">
            <div className="trans">
              <IoEarthSharp
                className="trans-icon"
                onClick={() => {
                  setShowLangs(!showLangs);
                }}
              />
            </div>
            <div className={`langs ${showLangs && "show-langs"}`}>
              <ul>
                <li
                  className="lang"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    setShowLangs(!showLangs);
                  }}
                >
                  عربي
                </li>
                <li
                  className="lang"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setShowLangs(!showLangs);
                  }}
                >
                  english
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
