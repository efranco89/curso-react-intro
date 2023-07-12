import React from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton(props) {
  const { openModal, setOpenModal } = React.useContext(TodoContext)
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