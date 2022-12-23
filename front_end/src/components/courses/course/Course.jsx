import React from "react";
import { useTranslation } from "react-i18next";
import "./course.css";
const Course = ({ course }) => {
  const { t } = useTranslation();
  return (
    <div className="course">
      <h3 className="course-head">
        <span className="course-name">{course.university.name}</span>
      </h3>
      <div className="course-info-list">
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.course")}
          </h4>
          <p className="course-info-text">{`${course.course_code.course}`}</p>
        </div>
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.price")}
          </h4>
          <p className="course-info-text">{`${course.price} ₽`}</p>
        </div>
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.deadline")}
          </h4>
          <p className="course-info-text">{course.university.apply_deadline}</p>
        </div>
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.code")}
          </h4>
          <p className="course-info-text">{course.course_code.code}</p>
        </div>
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.degree")}
          </h4>
          <p className="course-info-text">{course.course_code.degree}</p>
        </div>
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.city")}
          </h4>
          <p className="course-info-text">{course.university.city}</p>
        </div>{" "}
        <div className="course-info">
          <h4 className="course-info-title">
            {t("universities.university.language")}
          </h4>
          <p className="course-info-text">{course.langauge}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
