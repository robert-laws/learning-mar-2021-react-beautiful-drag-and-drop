import React, { useEffect } from 'react';
import { useCheckBoxInput } from '../hooks/useCheckBoxInput';

const CheckBox = ({ listName, itemName, checkChange }) => {
  const [value, onChange] = useCheckBoxInput({
    name: itemName,
    checked: false,
  });

  useEffect(() => {
    checkChange(value);
  }, [value, checkChange]);

  return (
    <>
      <label htmlFor={itemName}>{itemName}</label>{' '}
      <input
        type='checkbox'
        id={itemName}
        name={listName}
        value={value}
        checked={value.checked}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;
