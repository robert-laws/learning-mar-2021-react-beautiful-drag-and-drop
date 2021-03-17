import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDrop from './components/DragAndDrop';
// import LessonForm from './components/LessonForm';

function App() {
  return (
    <div className='App'>
      <h1>App</h1>
      {/* <LessonForm /> */}
      <DndProvider backend={HTML5Backend}>
        <DragAndDrop />
      </DndProvider>
    </div>
  );
}

export default App;
