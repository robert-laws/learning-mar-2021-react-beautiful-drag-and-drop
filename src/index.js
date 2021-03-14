import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoursesState from './context/courses/CoursesState';
import OptionsState from './context/options/OptionsState';

ReactDOM.render(
  <React.StrictMode>
    <CoursesState>
      <OptionsState>
        <App />
      </OptionsState>
    </CoursesState>
  </React.StrictMode>,
  document.getElementById('root')
);
