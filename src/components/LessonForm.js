import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import TextInput from './TextInput';
import DatePicker from './DatePicker';
import StaticTextInput from './StaticTextInput';
import CheckBoxList from './CheckBoxList';
import RadioButtonList from './RadioButtonList';
import CoursesContext from '../context/courses/coursesContext';
import OptionsContext from '../context/options/optionsContext';
import { setIntervals } from '../utils/formUtils';
import NumberPicker from './NumberPicker';

const LessonForm = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, getCourse, courses, course, isLoading } = coursesContext;

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    modules,
    librarians,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getModules,
    getLibrarians,
  } = optionsContext;

  const [formValues, setFormValues] = useState({});

  const [courseSelect, setCourseSelect] = useState({
    name: '',
    id: '',
  });

  const [durations, setDurations] = useState(null);

  useEffect(() => {
    getCourses();
    getInformationLiteracyObjectives();
    getThresholdConcepts();
    getModules();
    getLibrarians();
  }, [
    getCourses,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getModules,
    getLibrarians,
  ]);

  useEffect(() => {
    if (courseSelect.id !== '') {
      getCourse(courseSelect.id);
    }
  }, [getCourse, courseSelect]);

  useEffect(() => {
    const myDurations = setIntervals(5, 75, 5);
    setDurations(myDurations);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  const onSelect = useCallback(
    (name, id) => {
      setCourseSelect({ name, id });
    },
    [setCourseSelect]
  );

  return (
    <div>
      <h3>Lesson Plan</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Select
            optionList={courses}
            onSelect={onSelect}
            name='courses'
            initialText={'Select a Course'}
          />
          <StaticTextInput
            inputName={'course_code'}
            onInput={inputHandler}
            initialValue={''}
            updateValue={course.title?.rendered || ''}
            visible={true}
          />
          <StaticTextInput
            inputName={'course_name'}
            onInput={inputHandler}
            initialValue={''}
            updateValue={course.acf?.course_name || ''}
            visible={true}
          />
          <StaticTextInput
            inputName={'faculty'}
            onInput={inputHandler}
            initialValue={''}
            updateValue={course.acf?.faculty || ''}
            visible={true}
          />
          <StaticTextInput
            inputName={'semester'}
            onInput={inputHandler}
            initialValue={''}
            updateValue={course.acf?.semester || ''}
            visible={true}
          />
          <StaticTextInput
            inputName={'year'}
            onInput={inputHandler}
            initialValue={''}
            updateValue={course.acf?.year || ''}
            visible={true}
          />

          {/* Class Date */}
          <DatePicker inputName='session_date' onInput={inputHandler} />

          {/* Class Duration */}
          {durations && (
            <Select
              optionList={durations}
              onSelect={inputHandler}
              name='duration'
              initialText={'Select a session length'}
            />
          )}

          {/* Number of Learners */}
          <NumberPicker
            inputName='number_of_learners'
            onInput={inputHandler}
            initialValue={''}
          />

          {librarians && (
            <RadioButtonList
              listName='librarians'
              items={librarians}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <TextInput
            inputName={'class_assignment'}
            onInput={inputHandler}
            initialValue={''}
          />
          <hr />
          {informationLiteracyObjectives && (
            <CheckBoxList
              listName={'information_literacy_objectives'}
              items={informationLiteracyObjectives}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <hr />
          {thresholdConcepts && (
            <CheckBoxList
              listName={'threshold_concepts'}
              items={thresholdConcepts}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <hr />
          {modules && (
            <CheckBoxList
              listName={'modules'}
              items={modules}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default LessonForm;
