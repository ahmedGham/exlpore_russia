import React from "react";
import CoursesForm from "../../components/forms/coursesForm/CoursesForm";
import Section from "../../components/UI/section/Section";
import CoursesList from "../../components/courses/courseList/CoursesList";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import axios from "axios";

import "./courses.css";
const Courses = () => {
  const { t } = useTranslation();
  const [courses, setCourses] = useState([]); // to keep it sample

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:8000/universities/api/", {
        signal: controller.signal,
      })
      .then((res) => {
        setCourses(res.data);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Section
      title={t("universities.header")}
      question={t("universities.question")}
    >
      <div className="courses" id="unevirsities">
        <CoursesList courses={courses} />
        <CoursesForm setCourses={setCourses} courses={courses} />
      </div>
    </Section>
  );
};

export default Courses;
