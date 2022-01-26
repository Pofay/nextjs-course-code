import TodoCard from './components/TodoCard';
import Modal from './components/Modal';
import { useState } from 'react';
import Backdrop from './components/Backdrop';

const globalTodos = [
  {
    id: 1,
    title: 'Title1',
    description: 'Some Description',
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Another Description',
  },
];

const App = () => {
  const [todos, setTodos] = useState(globalTodos);
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleOnSelect = (event, todoId) => {
    event.preventDefault();
    setSelectedTodo(todos.find((t) => t.id === todoId));
    setShowModal(true);
  };

  const handleOnConfirmDeletion = (event) => {
    event.preventDefault();
    setTodos(todos.filter((t) => t.id !== selectedTodo.id));
    setShowModal(false);
  };

  const handleOnCancel = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((t) => (
        <TodoCard key={t.id} handleOnSelect={handleOnSelect} {...t} />
      ))}
      {showModal && (
        <Modal onConfirm={handleOnConfirmDeletion} onCancel={handleOnCancel} />
      )}
      {showModal && <Backdrop onClick={handleOnCancel}/>}
    </div>
  );
};

export default App;
