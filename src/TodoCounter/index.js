import React from 'react';
import './TodoCounter.css'
import { TodoContex } from '../TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } =  React.useContext(TodoContex)
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{ completedTodos }</span> de  <span>{ totalTodos }</span> TODOS
    </h1>
  )
}

export { TodoCounter };