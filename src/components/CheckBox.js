import React, { useEffect } from 'react';
import { useCheckBoxInput } from '../hooks/useCheckBoxInput';

const CheckBox = ({ id_number, listName, itemName, checked, checkChange }) => {
  const [value, onChange] = useCheckBoxInput({
    name: itemName,
    number: id_number,
    checked: checked,
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
        value={value.id_number}
        checked={value.checked}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;
