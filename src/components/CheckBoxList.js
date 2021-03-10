import React, { useState, useEffect, useCallback } from 'react';
import CheckBox from './CheckBox';

const CheckBoxList = ({ listName, items, onInput }) => {
  const [checkBoxes, setCheckBoxes] = useState([]);

  const checkChange = useCallback((box) => {
    if (box.checked === true) {
      setCheckBoxes((prevState) => {
        return [...prevState, box.name];
      });
    } else {
      setCheckBoxes((prevState) => {
        return prevState.filter((item) => item !== box.name);
      });
    }
  }, []);

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
