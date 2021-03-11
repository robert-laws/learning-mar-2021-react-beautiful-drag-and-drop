import React, { useState, useCallback } from 'react';
import TextInput from './TextInput';
import CheckBoxList from './CheckBoxList';

const LessonForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  return (
    <div>
      <h3>Lesson Plan</h3>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default LessonForm;
