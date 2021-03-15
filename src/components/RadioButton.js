import React, { useEffect } from 'react';
import { useCheckBoxInput } from '../hooks/useCheckBoxInput';

const RadioButton = ({
  listName,
  id_number,
  itemName,
  checked,
  checkChange,
}) => {
  const [value, onChange] = useCheckBoxInput({
    name: itemName,
    number: id_number,
    checked: checked,
  });

  useEffect(() => {
    checkChange(value);
  }, [value, checkChange]);

  useEffect(() => {
    if (checked !== value.checked) {
      onChange({ ...value, checked: checked });
    }
  }, [checked, value, onChange]);

  return (
    <>
      <input
        type='radio'
        id={id_number}
        name={listName}
        value={value.id_number}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id_number}>{itemName}</label>
    </>
  );
};

export default RadioButton;
