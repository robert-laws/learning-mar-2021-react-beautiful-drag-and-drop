import React, { useEffect } from 'react';
import { useStaticInput } from '../hooks/useStaticInput';

const StaticTextInput = ({
  inputName,
  onInput,
  initialValue,
  updateValue,
  visible = true,
}) => {
  const [value, onUpdate] = useStaticInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  useEffect(() => {
    onUpdate(updateValue);
  }, [updateValue, onUpdate]);

  return (
    <div className={`form-element ${visible ? 'show' : 'hide'}`}>
      <label htmlFor={inputName}>{inputName}:</label>
      <input
        type='text'
        name={inputName}
        id={inputName}
        value={value}
        readOnly
      />
    </div>
  );
};

export default StaticTextInput;
