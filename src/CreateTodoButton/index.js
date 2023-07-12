import React from 'react';
import './CreateTodoButton.css'
import { TodoContex } from '../TodoContext';

function CreateTodoButton(props) {
  const { openModal, setOpenModal } = React.useContext(TodoContex)
  return (
    <button className="CreateTodoButton"
    onClick={
      (event) => {
        setOpenModal(!openModal)        
      } 
    }
    >+</button>
  )
}

export { CreateTodoButton };