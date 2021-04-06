import './App.css';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import DragAndDrop from './components/DragAndDrop';
import LessonForm from './components/LessonForm';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          {/* <DndProvider backend={HTML5Backend}>
            <DragAndDrop />
          </DndProvider> */}
          <LessonForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
