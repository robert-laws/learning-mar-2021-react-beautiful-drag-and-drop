import React, { useCallback, useState, useEffect } from 'react';
import TextInput from './TextInput';

const TextInputCollection = ({ listName, onInput }) => {
  const [formValues, setFormValues] = useState({});
  const [finalHtml, setFinalHtml] = useState('');

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  useEffect(() => {
    let htmlOutput = '<ul>';
    for (const [key, value] of Object.entries(formValues)) {
      htmlOutput += `<li>${value}</ul>`;
    }
    htmlOutput += '</ul>';
    setFinalHtml(htmlOutput);
  }, [formValues]);

  const handleNewOutcome = () => {
    setInputNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    onInput(listName, finalHtml);
  }, [listName, finalHtml, onInput]);

  const [formFields, setFormFields] = useState([]);
  const [inputNumber, setInputNumber] = useState(0);

  useEffect(() => {
    setFormFields((prevState) => [
      ...prevState,
      <TextInput
        inputName={`outcome-${inputNumber}`}
        initialValue=''
        onInput={inputHandler}
      />,
    ]);
  }, [inputNumber, inputHandler]);

  return (
    <>
      {formFields.map((field, index) => (
        <div key={index}>{field}</div>
      ))}

      <button onClick={handleNewOutcome}>Add New Outcome</button>
    </>
  );
};

export default TextInputCollection;
