import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
import CheckBoxList from './CheckBoxList';
import Select from './Select';
import TextInput from './TextInput';
import OptionsContext from '../context/options/optionsContext';

const DragAndDrop = () => {
  const optionsContext = useContext(OptionsContext);
  const { modules, getModules, addCustomModule } = optionsContext;

  const [formValues, setFormValues] = useState({});
  const [modulesList, setModulesList] = useState([]);
  const [myCheckedList, setMyCheckedList] = useState([]);
  const [customModule, setCustomModule] = useState('');
  const [selectedModulesDetails, setSelectedModulesDetails] = useState({});

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

        setSelectedModulesDetails((prevState) => {
          const newData = { ...prevState };
          delete newData[removeItem];
          return newData;
        });
      }
    } else {
      if (formValues.modules?.length === 0) {
        setModulesList([]);
        setSelectedModulesDetails({});
      }
    }
  }, [formValues.modules, modules]);

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  const handleAddCustomModule = () => {
    const number = modules.length;
    const newModule = {
      id: number + 1,
      name: customModule,
    };
    addCustomModule(newModule);
    setMyCheckedList((prevState) => [...prevState, newModule.id]);
    setCustomModule('');
  };

  const handleCustomModuleChange = (event) => {
    setCustomModule(event.target.value);
  };

  const handleModuleDetails = useCallback((inputName, value) => {
    const detailInput = inputName.split('-');
    const modNumber = detailInput[0];
    const modPart = detailInput[1];

    const detailObject = { [modPart]: value };
    setSelectedModulesDetails((prevState) => {
      return {
        ...prevState,
        ...{ [modNumber]: { ...prevState[modNumber], ...detailObject } },
      };
    });
  }, []);

  const handleReview = () => {
    let modules_detail = '<ul>';

    modules_detail += modulesList.map((module) => {
      let modNumber = module.id;
      let modName = module.name.replace(/\s+/g, '-').toLowerCase();

      let singleModDetail = '';
      Object.entries(selectedModulesDetails).map(([key, value]) => {
        if (parseInt(key) === modNumber) {
          singleModDetail += `<li id='mod-${modName}'><span>${value.time}</span><p>${value.text}</p></li>`;
        }
      });

      return singleModDetail;
    });

    modules_detail += '</ul>';

    console.log(modules_detail.replace(/,/g, ''));
  };

  return (
    <div>
      {modules && (
        <>
          <CheckBoxList
            listName={'modules'}
            items={modules}
            onInput={inputHandler}
            checkedList={myCheckedList}
          />
          <input
            type='text'
            value={customModule}
            id='custom_module'
            name='custom_module'
            onChange={handleCustomModuleChange}
          />
          <button
            type='button'
            disabled={!customModule}
            onClick={handleAddCustomModule}
          >
            Add Custom Module
          </button>
        </>
      )}
      <hr />
      {modulesList && modulesList.length > 0 && (
        <>
          <div style={style}>
            {modulesList.map((module, i) => renderCard(module, i))}
          </div>
          {modulesList.map((mod) => (
            <div key={mod.id}>
              <h5>{mod.name}</h5>
              <TextInput
                inputName={`${mod.id}-text`}
                onInput={handleModuleDetails}
              />
              <Select
                name={`${mod.id}-time`}
                optionList={[
                  { id: '10', title: '10' },
                  { id: '15', title: '15' },
                  { id: '20', title: '20' },
                ]}
                onSelect={handleModuleDetails}
              />
            </div>
          ))}
        </>
      )}
      <button type='button' onClick={handleReview}>
        Finished
      </button>
    </div>
  );
};

export default DragAndDrop;
