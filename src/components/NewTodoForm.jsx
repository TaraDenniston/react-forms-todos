import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    todo: ''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="todo"
        type="text"
        name="todo"
        placeholder="Add new item"
        value={formData.todo}
        onChange={handleChange}
      />
      <button type="submit"><FontAwesomeIcon icon={faCirclePlus} /></button>
    </form>
  )
}

export default NewTodoForm;