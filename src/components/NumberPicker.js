import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const NumberPicker = ({ inputName, onInput, initialValue }) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <>
      <label htmlFor={inputName}>{inputName.split('_').join(' ')}</label>
      <input
        type='number'
        id={inputName}
        name={inputName}
        min='1'
        max='50'
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default NumberPicker;
