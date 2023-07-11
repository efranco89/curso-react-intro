import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';

function App() {
  const [todos, saveItem] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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
    saveItem(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return "";
    })
    saveItem(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;

// const defaultTodos = [
//   { id: 1,text: 'Cortar cebolla', completed: false },
//   { id: 2,text: 'Tomar Curso Introduccion ReactJS', completed: false },
//   { id: 3,text: 'Llorrar con la LLorona', completed: false },
//   { id: 4,text: 'Revisar Correo', completed: false },
//   { id: 5,text: 'Pedir Comida', completed: true },
//   { id: 6,text: 'Fastidiar al Panda', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
