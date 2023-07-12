import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm'
import React from 'react';
import { Modal } from '../Modal'

function AppUI() {
  const {
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal
  } = React.useContext(TodoContext)
  
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
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI }