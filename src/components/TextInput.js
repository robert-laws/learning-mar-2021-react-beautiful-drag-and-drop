import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const TextInput = ({ inputName, onInput }) => {
  const [value, onChange] = useInput();

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <div className='form-element'>
      <label htmlFor={inputName}>{inputName}:</label>
      <input
        type='text'
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
