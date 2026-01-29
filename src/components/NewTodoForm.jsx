import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const NewTodoForm = () => {
  return (
    <div>
      <p>add todo</p>
      <button><FontAwesomeIcon icon={faCirclePlus} /></button>
    </div>
  )
}

export default NewTodoForm;