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
        <TextInput inputName={'age'} onInput={inputHandler} initialValue={''} />
        <TextInput
          inputName={'firstName'}
          onInput={inputHandler}
          initialValue={''}
        />
        <TextInput
          inputName={'lastName'}
          onInput={inputHandler}
          initialValue={''}
        />
        <CheckBoxList
          listName={'mediaTypes'}
          items={[
            { name: 'film', checked: false },
            { name: 'sound recording', checked: false },
            { name: 'computer file', checked: false },
          ]}
          onInput={inputHandler}
        />

        <CheckBoxList
          listName={'lights'}
          items={[
            { name: 'office lamp', checked: false },
            { name: 'kitchen lights', checked: false },
          ]}
          onInput={inputHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
