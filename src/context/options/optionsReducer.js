import {
  GET_INFORMATION_LITERACY_OBJECTIVES,
  GET_THRESHOLD_CONCEPTS,
  GET_MODULES,
  GET_LIBRARIANS,
  ADD_CUSTOM_MODULES,
} from '../types';

const optionsReducer = (state, action) => {
  switch (action.type) {
    case GET_INFORMATION_LITERACY_OBJECTIVES: {
      return {
        ...state,
        informationLiteracyObjectives: action.payload,
      };
    }

    case GET_THRESHOLD_CONCEPTS: {
      return {
        ...state,
        thresholdConcepts: action.payload,
      };
    }

    case GET_MODULES: {
      return {
        ...state,
        modules: action.payload,
      };
    }

    case ADD_CUSTOM_MODULES: {
      return {
        ...state,
        modules: [...state.modules, action.payload],
      };
    }

    case GET_LIBRARIANS: {
      return {
        ...state,
        librarians: action.payload,
      };
    }

    default:
      return state;
  }
};

export default optionsReducer;
