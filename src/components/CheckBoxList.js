import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox';

const CheckBoxList = ({ listName, items, onInput }) => {
  const [checkBoxes, setCheckBoxes] = useState([]);

  const checkChange = (event) => {
    const isChecked = event.target.checked;

    if (isChecked === true) {
      setCheckBoxes((prevState) => {
        return [...prevState, event.target.value];
      });
    } else {
      setCheckBoxes((prevState) => {
        return prevState.filter((item) => item !== event.target.value);
      });
    }
  };

  useEffect(() => {
    onInput(listName, checkBoxes);
  }, [listName, checkBoxes, onInput]);

  return (
    <div>
      {items.map((item) => (
        <CheckBox
          key={item}
          listName={listName}
          itemName={item}
          checkChange={checkChange}
        />
      ))}
    </div>
  );
};

export default CheckBoxList;
