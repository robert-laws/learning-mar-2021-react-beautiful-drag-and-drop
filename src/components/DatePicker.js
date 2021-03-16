import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const DatePicker = ({ inputName, onInput, initialValue }) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <>
      <label htmlFor={inputName}>{inputName.split('_').join(' ')}</label>
      <input
        type='date'
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default DatePicker;
