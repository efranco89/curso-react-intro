import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { id: 1,text: 'Cortar cebolla', completed: false },
  { id: 2,text: 'Tomar Curso Introduccion ReactJS', completed: false },
  { id: 3,text: 'Llorrar con la LLorona', completed: false },
  { id: 4,text: 'Revisar Correo', completed: false },
  { id: 5,text: 'Pedir Comida', completed: true },
  { id: 6,text: 'Fastidiar al Panda', completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue)

  const completedTodos = todos.filter(todo =>( !!todo.completed)).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase() 
    return todoText.includes(searchText) 
  })

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        if (todo.completed) {
          return {...todo, completed: false };
        } else {
          return {...todo, completed: true };
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return "";
    })
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed = {completedTodos} total = {totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        { searchedTodos.map(todo => (
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
    </>
  );
}

export default App;
