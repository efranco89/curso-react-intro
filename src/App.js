import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar Curso Introduccion ReactJS', completed: false },
  { text: 'Llorrar con la LLorona', completed: true },
  { text: 'Revisar Correo', completed: true },
  { text: 'Pedir Comida', completed: false },
  { text: 'Fastidiar al Panda', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed ={16} total = {20} />
      <TodoSearch />

      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
