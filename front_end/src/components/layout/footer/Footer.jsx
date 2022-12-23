import React from "react";
import Container from "../../UI/container/Container";
import { Link } from "react-scroll";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./footer.css";
const Footer = () => {
  const { t } = useTranslation();

  const openNewTab = (url) => window.open(url, "_blank");

  return (
    <footer className="footer">
      <Container>
        <div className="flexbox-3">
          <div className="box">
            <h4>{t("footer.contact.name")}</h4>
            <ul className="footer-list">
              <li>
                <div className="contact-item">
                  <p>email@gmail.com</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <p>+776441777</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <p style={{ fontSize: "14px" }}>
                    Большой просп. Петроградской стороны, 67
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>{t("footer.links.name")}</h4>
            <ul className="footer-list">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="footer-link"
                >
                  {t("footer.links.items.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="unevirsities"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="footer-link"
                >
                  {t("footer.links.items.universities")}
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="footer-link"
                >
                  {t("footer.links.items.services")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <p>{t("footer.about.text")}</p>
            <div className="social-media">
              <h5>{t("footer.about.socail_media")}</h5>
              <ul className="social-media-icons">
                <li>
                  <BsInstagram
                    className="social-media-icon"
                    onClick={() => openNewTab("")}
                  />
                </li>
                <li>
                  <BsFacebook
                    className="social-media-icon"
                    onClick={() => openNewTab("")}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="copy-rights">
        <Container>
          <p>
            <span class="colored-text">Explore Russia</span> - Copyright 2022 -
            All Rights Reserved | Design & Developed by{" "}
            <span class="colored-text">Akhmedchek</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
