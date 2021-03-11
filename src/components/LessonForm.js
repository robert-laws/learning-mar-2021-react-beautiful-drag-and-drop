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
                updateValue={course.title.rendered}
                visible={false}
              />
              <StaticTextInput
                inputName={'course_name'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.course_name}
                visible={false}
              />
              <StaticTextInput
                inputName={'faculty'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.faculty}
                visible={false}
              />
              <StaticTextInput
                inputName={'semester'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.semester}
                visible={false}
              />
              <StaticTextInput
                inputName={'year'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf.year}
                visible={false}
              />
            </>
          )}
          <div>Course Code: {course && course.title.rendered}</div>
          <div>Course Name: {course && course.acf.course_name}</div>
          <div>Faculty: {course && course.acf.faculty}</div>
          <div>Semester: {course && course.acf.semester}</div>
          <div>Year: {course && course.acf.year}</div>
          <TextInput
            inputName={'class_assignment'}
            onInput={inputHandler}
            initialValue={''}
          />
          <hr />
          <CheckBoxList
            listName={'information_literacy_objectives'}
            items={[
              { name: 'Avoiding Plagiarism', checked: false },
              { name: 'Gathering Data/Statistics', checked: false },
              { name: 'Citing', checked: false },
              { name: 'Primary Sources', checked: false },
              { name: 'Evaluating Sources', checked: false },
              { name: 'Scholarly vs Non-scholarly Sources', checked: false },
              { name: 'Literature Review', checked: false },
              { name: 'Search Strategy/Skills', checked: false },
              { name: 'Finding Journal Articles', checked: false },
              { name: 'Software instruction', checked: false },
              { name: 'Finding/Using Multimedia Sources', checked: false },
            ]}
            onInput={inputHandler}
          />
          <hr />
          <CheckBoxList
            listName={'threshold_concepts'}
            items={[
              {
                name: 'Authority Is Constructed and Contextual',
                checked: false,
              },
              { name: 'Research As Inquiry', checked: false },
              { name: 'Information Creation as a Process', checked: false },
              { name: 'Scholarship as Conversation', checked: false },
              { name: 'Information Has Value', checked: false },
              { name: 'Search as Strategic Exploration', checked: false },
            ]}
            onInput={inputHandler}
          />
          <hr />
          <CheckBoxList
            listName={'modules'}
            items={[
              { name: 'Advanced HoyaSearch', checked: false },
              { name: 'Background Knowledge', checked: false },
              { name: 'Basic HoyaSearch', checked: false },
              { name: 'Citing Properly', checked: false },
              { name: 'Data and Dataset searching', checked: false },
              { name: 'Develop a Topic', checked: false },
              { name: 'Evaluate Information Sources', checked: false },
              { name: 'Expert Google Scholar', checked: false },
              { name: 'Get to Know the Library', checked: false },
              { name: 'Literature Review', checked: false },
              { name: 'Multimedia and Copyright Guidelines', checked: false },
              { name: 'Primary Sources', checked: false },
              { name: 'RefWorks/Zotero', checked: false },
              { name: 'Searching for News', checked: false },
              { name: 'Subject Database Search', checked: false },
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
