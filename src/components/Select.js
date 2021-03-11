import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const Select = ({ optionList, selectedItem, onSelect }) => {
  const [value, onChange] = useInput('');

  useEffect(() => {
    onSelect(value);
  }, [value, onSelect]);

  return (
    <div>
      <label>
        Courses:
        <select value={selectedItem} onChange={onChange}>
          <option value=''>Select a Course</option>
          {optionList.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >{`${item.title.rendered} - ${item.acf.faculty}`}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
