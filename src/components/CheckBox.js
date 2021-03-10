import React from 'react';

const CheckBox = ({ listName, itemName, checkChange }) => {
  const handleChange = (event) => {
    checkChange(event);
  };

  return (
    <>
      <label htmlFor={itemName}>{itemName}</label>{' '}
      <input
        type='checkbox'
        id={itemName}
        name={listName}
        value={itemName}
        onChange={handleChange}
      />
    </>
  );
};

export default CheckBox;
