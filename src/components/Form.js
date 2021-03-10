import React, { useState, useCallback } from 'react';
import TextInput from './TextInput';
import CheckBoxList from './CheckBoxList';

const Form = () => {
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
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <TextInput inputName={'age'} onInput={inputHandler} />
        <TextInput inputName={'firstName'} onInput={inputHandler} />
        <TextInput inputName={'lastName'} onInput={inputHandler} />
        <CheckBoxList
          listName={'mediaTypes'}
          items={['film', 'sound recording', 'computer file']}
          onInput={inputHandler}
        />

        <CheckBoxList
          listName={'lights'}
          items={['office lamp', 'kitchen lights']}
          onInput={inputHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
