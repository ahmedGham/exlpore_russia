import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import courseFormReducer from "./FormReducers";
import courseFormActions from "./FormActions";
import "./multiRangeSlider.css";
import "./courseForm.css";

const initialState = {
  modifiedFields: {}, // fields of the form that get modified and are dependent(they depend on each other)
  degrees: [],
  courses: [],
  cities: [],
  courseParams: {
    degree: "all",
    course: "all",
    city: "all",
    maxPrice: 300000,
    minPrice: 40000,
    language: "all",
  },
};

const CoursesForm = ({ setCourses }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  let maxRef = 300000;
  let minRef = 40000;
  const [formState, dispatch] = useReducer(courseFormReducer, initialState);

  const handleChangeParams = (params) => {
    dispatch({
      type: courseFormActions.UPDATE_COURSE_PARAMS,
      payload: { name: params.name, value: params.value },
    });
  };

  const handleUpdateModifiedFields = (e) => {
    const label = e.target.name;
    const value = e.target.value;
    dispatch({
      type: courseFormActions.UPDATE_MODIFIED_FIELDS,
      payload: { label, value },
    });
    handleChangeParams({ name: label, value: value });
  };

  const handleFetch = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(formState.courseParams);
    navigate(params.toString());

    const response = await axios.get(
      "http://localhost:8000/universities/api/",
      {
        params: formState.courseParams,
      }
    
    );
    setCourses(response.data);
  };

  useEffect(() => {
    const params = new URLSearchParams(formState.modifiedFields);
    const controller = new AbortController();

    axios
      .get("http://localhost:8000/universities/api/form-data", {
        params: params,
        signal: controller.signal,
      })
      .then((res) => {
        dispatch({
          type: courseFormActions.UPDATE_FORM_DATA,
          data: res.data,
        });
      });
    return () => {
      controller.abort();
    };
  }, [formState.modifiedFields]);

  return (
    <form className="course-form">
      <div className="form-row">
        <label htmlFor="level" className="form-label">
          {t("universities.form.degree")}
        </label>
        <select
          name="degree"
          id="degree"
          className="form-input form-select"
          onChange={handleUpdateModifiedFields}
          value={formState.courseParams.degree}
        >
          {formState.degrees.length === 0 ? (
            <option value="">nothing</option>
          ) : (
            <option value="all">all</option>
          )}
          {formState.degrees?.map((level, index) => {
            return (
              <>
                <option key={index} value={level}>
                  {level}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="course" className="form-label">
          {t("universities.form.spacialization")}
        </label>

        <select
          name="course"
          id="course"
          className="form-input form-select"
          onChange={handleUpdateModifiedFields}
          value={formState.courseParams.course}
        >
          {formState.courses.length === 0 ? (
            <option value="">nothing</option>
          ) : (
            <option value="all">all</option>
          )}
          {formState.courses?.map((course, index) => {
            return (
              <>
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="price" className="form-label">
          {t("universities.form.price")}
        </label>
        <MultiRangeSlider
          min={minRef}
          max={maxRef}
          onChange={({ min, max }) => {
            handleChangeParams({ name: "maxPrice", value: max });
            handleChangeParams({ name: "minPrice", value: min });
          }}
          handleChangeParams={handleChangeParams}
        />
      </div>
      <div className="form-row">
        <label htmlFor="city" className="form-label">
          {t("universities.form.city")}
        </label>
        <select
          name="city"
          id="city"
          className="form-input form-select"
          onChange={handleUpdateModifiedFields}
          value={formState.courseParams.city}
        >
          {formState.cities.length === 0 ? (
            <option value="">nothing</option>
          ) : (
            <option value="all">all</option>
          )}
          {formState.cities?.map((city, index) => {
            return (
              <>
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <div className="form-row">
        <div>
          <legend className="form-label">
            {" "}
            {t("universities.form.langauge")}
          </legend>
          <div className="radio-container">
            <div className="radio-control">
              <input
                type="radio"
                id="ru"
                name="language"
                value="russian"
                // checked
                className="form-input"
                onChange={(e) => {
                  handleChangeParams({
                    name: e.target.name,
                    value: e.target.value,
                  });
                }}
              />
              <label htmlFor="ru">ru</label>
            </div>

            <div className="radio-control">
              <input
                type="radio"
                id="en"
                name="language"
                value="english"
                className="form-input"
                onChange={(e) => {
                  handleChangeParams({
                    name: e.target.name,
                    value: e.target.value,
                  });
                }}
              />
              <label htmlFor="en">en</label>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn unver-button-form"
        type="submit"
        onClick={handleFetch}
      >
        search
      </button>
    </form>
  );
};

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className="multi__range__slider">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

// export default MultiRangeSlider;

export default CoursesForm;
