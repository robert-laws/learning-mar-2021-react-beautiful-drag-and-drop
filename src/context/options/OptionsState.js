import React, { useReducer, useCallback } from 'react';
import {
  GET_INFORMATION_LITERACY_OBJECTIVES,
  GET_THRESHOLD_CONCEPTS,
  GET_MODULES,
  GET_LIBRARIANS,
} from '../types';
import OptionsContext from './optionsContext';
import optionsReducer from './optionsReducer';

const OptionsState = ({ children }) => {
  const initialState = {
    informationLiteracyObjectives: {},
    thresholdConcepts: {},
    modules: {},
    librarians: {},
  };

  const [state, dispatch] = useReducer(optionsReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getInformationLiteracyObjectives = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/information_literacy_objectives?_fields=id,name&per_page=11`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_INFORMATION_LITERACY_OBJECTIVES, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getThresholdConcepts = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/threshold_concepts?_fields=id,name`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_THRESHOLD_CONCEPTS, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getModules = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/modules?_fields=id,name&order=asc&per_page=15`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_MODULES, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getLibrarians = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/librarians?_fields=id,title`;

    try {
      const response = await fetch(restURL);
      const data = await response.json();

      if (data) {
        dispatch({ type: GET_LIBRARIANS, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <OptionsContext.Provider
      value={{
        informationLiteracyObjectives: state.informationLiteracyObjectives,
        thresholdConcepts: state.thresholdConcepts,
        modules: state.modules,
        librarians: state.librarians,
        getInformationLiteracyObjectives,
        getThresholdConcepts,
        getModules,
        getLibrarians,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsState;
