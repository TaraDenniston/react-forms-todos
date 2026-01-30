import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, { ...newTodo, id: uuid(), completed: false }])
  }

  return (
    <div>
      <h1>To Do</h1>
      <div>
        <NewTodoForm addTodo={addTodo} />
      </div>
      <p>List of Todo Items</p>
    </div>
  )
}

export default TodoList;