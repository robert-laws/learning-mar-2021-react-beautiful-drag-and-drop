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

      if (checkedLength > modulesListLength) {
        formValues.modules.forEach((item) => {
          if (modulesList.some((i) => i.id === item)) {
          } else {
            let addedModule = modules.find((formItem) => formItem.id === item);
            setModulesList((prevState) => [...prevState, addedModule]);
          }
        });
      } else {
        const modulesIdList = modulesList.map((item) => item.id);
        let removeItem = null;
        modulesIdList.forEach((item) => {
          if (formValues.modules.includes(item)) {
            // do nothing, is in the form list
          } else {
            removeItem = item;
          }
        });

        setModulesList((prevState) => [
          ...prevState.filter((item) => item.id !== removeItem),
        ]);
      }
    } else {
      if (formValues.modules?.length === 0) {
        setModulesList([]);
      }
    }
  }, [formValues.modules, modules]);

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
