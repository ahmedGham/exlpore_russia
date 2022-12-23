import courseFormActions from "./FormActions";

const courseFormReducer = (state, action) => {
  switch (action.type) {
    case courseFormActions.UPDATE_FORM_DATA:
      return {
        ...state,
        degrees: action.data?.degrees,
        courses: action.data?.courses,
        cities: action.data?.cities,
      };
    case courseFormActions.UPDATE_MODIFIED_FIELDS:
      return {
        ...state,
        modifiedFields: {
          ...state.modifiedFields,
          [action.payload.label]: action.payload.value,
        },
      };
    case courseFormActions.UPDATE_COURSE_PARAMS:
      return {
        ...state,
        courseParams: {
          ...state.courseParams,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default courseFormReducer;
