import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import TextInput from './TextInput';
import StaticTextInput from './StaticTextInput';
import CheckBoxList from './CheckBoxList';
import CoursesContext from '../context/courses/coursesContext';

const LessonForm = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, getCourse, courses, course, isLoading } = coursesContext;

  const [formValues, setFormValues] = useState({});

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
            </>
          )}
          <TextInput
            inputName={'class_assignment'}
            onInput={inputHandler}
            initialValue={''}
          />
          <hr />
          <CheckBoxList
            listName={'information_literacy_objectives'}
            items={[
              { name: 'Avoiding Plagiarism', id: 7, checked: false },
              { name: 'Gathering Data/Statistics', id: 8, checked: false },
              { name: 'Citing', id: 9, checked: false },
              { name: 'Primary Sources', id: 10, checked: false },
              { name: 'Evaluating Sources', id: 11, checked: false },
              {
                name: 'Scholarly vs Non-scholarly Sources',
                id: 12,
                checked: false,
              },
              { name: 'Literature Review', id: 13, checked: false },
              { name: 'Search Strategy/Skills', id: 14, checked: false },
              { name: 'Finding Journal Articles', id: 15, checked: false },
              { name: 'Software instruction', id: 16, checked: false },
              {
                name: 'Finding/Using Multimedia Sources',
                id: 17,
                checked: false,
              },
            ]}
            onInput={inputHandler}
          />
          <hr />
          <CheckBoxList
            listName={'threshold_concepts'}
            items={[
              {
                name: 'Authority Is Constructed and Contextual',
                id: 18,
                checked: false,
              },
              { name: 'Research As Inquiry', id: 19, checked: false },
              {
                name: 'Information Creation as a Process',
                id: 20,
                checked: false,
              },
              { name: 'Scholarship as Conversation', id: 21, checked: false },
              { name: 'Information Has Value', id: 22, checked: false },
              {
                name: 'Search as Strategic Exploration',
                id: 23,
                checked: false,
              },
            ]}
            onInput={inputHandler}
          />
          <hr />
          <CheckBoxList
            listName={'modules'}
            items={[
              { name: 'Advanced HoyaSearch', id: 24, checked: false },
              { name: 'Background Knowledge', id: 25, checked: false },
              { name: 'Basic HoyaSearch', id: 26, checked: false },
              { name: 'Citing Properly', id: 27, checked: false },
              { name: 'Data and Dataset searching', id: 28, checked: false },
              { name: 'Develop a Topic', id: 29, checked: false },
              { name: 'Evaluate Information Sources', id: 30, checked: false },
              { name: 'Expert Google Scholar', id: 31, checked: false },
              { name: 'Get to Know the Library', id: 32, checked: false },
              { name: 'Literature Review', id: 33, checked: false },
              {
                name: 'Multimedia and Copyright Guidelines',
                id: 34,
                checked: false,
              },
              { name: 'Primary Sources', id: 35, checked: false },
              { name: 'RefWorks/Zotero', id: 36, checked: false },
              { name: 'Searching for News', id: 37, checked: false },
              { name: 'Subject Database Search', id: 38, checked: false },
            ]}
            onInput={inputHandler}
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default LessonForm;
