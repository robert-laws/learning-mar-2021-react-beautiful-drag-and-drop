import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const Select = ({
  optionList,
  onSelect,
  name,
  initialText = 'Make a Selection',
}) => {
  const [value, onChange] = useInput('');

  useEffect(() => {
    onSelect(name, value);
  }, [value, name, onSelect]);

  return (
    <div>
      <label>
        {name}:
        <select name={name} value={value} onChange={onChange}>
          <option value=''>{initialText}</option>
          {optionList.map((item) => (
            <option key={item.id} value={item.id}>{`${
              item.title?.rendered || item.title
            }`}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
