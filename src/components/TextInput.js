import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const TextInput = ({ inputName, onInput, initialValue }) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <div className='form-element'>
      <label htmlFor={inputName}>{inputName.split('_').join(' ')}:</label>
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
