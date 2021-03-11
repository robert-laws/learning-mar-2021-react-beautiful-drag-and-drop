import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import TextInput from './TextInput';
import StaticTextInput from './StaticTextInput';
import CheckBoxList from './CheckBoxList';
import CoursesContext from '../context/courses/coursesContext';

const LessonForm = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, getCourse, courses, course, isLoading } = coursesContext;

  const [formValues, setFormValues] = useState({
    course_code: '',
    course_name: '',
    faculty: '',
    semester: '',
    year: '',
  });

  const [courseSelect, setCourseSelect] = useState('');

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  useEffect(() => {
    if (courseSelect !== '') {
      getCourse(courseSelect);
    }
  }, [getCourse, courseSelect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  const onSelect = (id) => {
    setCourseSelect(id);
  };

  return (
    <div>
      <h3>Lesson Plan</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Select
            optionList={courses}
            selectedItem={courseSelect}
            onSelect={onSelect}
          />
          {course && (
            <>
              <StaticTextInput
                inputName={'course_code'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.title.rendered}
              />
              <StaticTextInput
                inputName={'course_name'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.course_name}
              />
              <StaticTextInput
                inputName={'faculty'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.faculty}
              />
              <StaticTextInput
                inputName={'semester'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.semester}
              />
              <StaticTextInput
                inputName={'year'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.year}
              />
            </>
          )}
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default LessonForm;
