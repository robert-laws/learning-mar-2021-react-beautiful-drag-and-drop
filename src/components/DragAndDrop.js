import React, { useState, useCallback, useContext, useEffect } from 'react';
import CheckBoxList from './CheckBoxList';
import OptionsContext from '../context/options/optionsContext';

const DragAndDrop = () => {
  const optionsContext = useContext(OptionsContext);
  const { modules, getModules } = optionsContext;

  const [formValues, setFormValues] = useState({});
  const [modulesList, setModulesList] = useState([]);

  useEffect(() => {
    getModules();
  }, [getModules]);

  useEffect(() => {
    if (formValues.modules?.length > 0) {
      let myModules = formValues.modules.map((number) =>
        modules.find((module) => module.id === number)
      );

      let myModulesNames = myModules.map((module) => module.name);
      setModulesList(myModulesNames);
    } else {
      setModulesList([]);
    }
  }, [formValues, modules]);

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  return (
    <div>
      {modules && (
        <CheckBoxList
          listName={'modules'}
          items={modules}
          onInput={inputHandler}
          checkedList={[]}
        />
      )}
      <hr />
      {modulesList &&
        modulesList.length > 0 &&
        modulesList.map((module) => <div key={module}>{module}</div>)}
    </div>
  );
};

export default DragAndDrop;
