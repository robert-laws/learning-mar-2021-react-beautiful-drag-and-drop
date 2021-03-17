import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import CheckBoxList from './CheckBoxList';
import OptionsContext from '../context/options/optionsContext';

const DragAndDrop = () => {
  const optionsContext = useContext(OptionsContext);
  const { modules, getModules } = optionsContext;

  const [formValues, setFormValues] = useState({});
  const [modulesList, setModulesList] = useState([]);

  const style = {
    width: 400,
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = modulesList[dragIndex];
      setModulesList(
        update(modulesList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [modulesList]
  );

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.name}
        moveCard={moveCard}
      />
    );
  };

  useEffect(() => {
    getModules();
  }, [getModules]);

  useEffect(() => {
    if (formValues.modules?.length > 0) {
      const checkedLength = formValues.modules.length;
      const modulesListLength = modulesList.length;

      // console.log(checkedLength);
      // console.log(modulesListLength);

      if (checkedLength > modulesListLength) {
        formValues.modules.forEach((item) => {
          if (modulesList.some((i) => i.id === item)) {
          } else {
            let addedModule = modules.find((formItem) => formItem.id === item);
            setModulesList((prevState) => [...prevState, addedModule]);
          }
        });
      } else {
        console.log('need to remove one');
      }
      // let myModules = formValues.modules.map((number) =>
      //   modules.find((module) => module.id === number)
      // );
      // console.log(myModules);

      // let myModulesNames = myModules.map((module) => module);
      // setModulesList(myModulesNames);
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
      {modulesList && modulesList.length > 0 && (
        <div style={style}>
          {modulesList.map((module, i) => renderCard(module, i))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
