import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContex } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal'

function AppUI() {
  const {
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContex)
  
  return (
    <>

      <TodoCounter/>
      <TodoSearch />
      
      <TodoList>
        { loading && (
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <TodosEmpty/> }

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
      {openModal && (
        <Modal>
          La funcionalidad de agregar un TODO
        </Modal>
      )}
    </>
  );
}

export { AppUI }