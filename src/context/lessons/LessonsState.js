import React, { useReducer, useCallback } from 'react';
import { BUILD_LESSON } from '../types';
import LessonsContext from './lessonsContext';
import lessonsReducer from './lessonsReducer';

const LessonsState = ({ children }) => {
  const initialState = {
    lesson: {},
    isLoadingLesson: true,
  };

  const [state, dispatch] = useReducer(lessonsReducer, initialState);

  const buildLesson = useCallback(
    (inputName, value) => {
      dispatch({ type: BUILD_LESSON, payload: { inputName, value } });
    },
    [dispatch]
  );

  return (
    <LessonsContext.Provider value={{ lesson: state.lesson, buildLesson }}>
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsState;
