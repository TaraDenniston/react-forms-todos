import { useState } from 'react';
import NewTodoForm from './NewTodoForm';


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>To Do</h1>
      <div>
        <NewTodoForm />
      </div>
      <p>List of Todo Items</p>
    </div>
  )
}

export default TodoList;