import React, { useEffect } from 'react';
import { useCheckBoxInput } from '../hooks/useCheckBoxInput';

const CheckBox = ({ id_number, itemName, checked, checkChange }) => {
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
      <label htmlFor={`${itemName}-${id_number}`}>{itemName}</label>{' '}
      <input
        type='checkbox'
        id={`${itemName}-${id_number}`}
        name={`${itemName}-${id_number}`}
        value={value.id_number}
        checked={value.checked}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;
