import React from "react";
import Container from "../../components/UI/container/Container";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import './hero.css'
const Hero = () => {
  const { t } = useTranslation();
  
  const openNewTab = (url) => window.open(url, "_blank");

  return (
    <div id="hero" className="home">
      <div className="hero-image">
        <Container>
          <div className="hero-heads">
            <div className="head-line">
              <div>{t("hero.header1")}</div>
              <div>
                <span>Explore Russia</span>
              </div>
            </div>
            <p className="sec-line">{t("hero.header2")}</p>
          </div>
          <div className="btns">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="btn-border"
            >
              {t("hero.button2")}
            </Link>
            <Link
              to="unevirsities"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="btn-border"
            >
              {t("hero.button1")}
            </Link>
          </div>
        </Container>
        <div className="hero-bar-container">
          <div className="hero-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
