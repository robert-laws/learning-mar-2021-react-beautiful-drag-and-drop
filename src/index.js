import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoursesState from './context/courses/CoursesState';
import OptionsState from './context/options/OptionsState';
import LessonsState from './context/lessons/LessonsState';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CoursesState>
      <OptionsState>
        <LessonsState>
          <App />
        </LessonsState>
      </OptionsState>
    </CoursesState>
  </React.StrictMode>,
  document.getElementById('root')
);
