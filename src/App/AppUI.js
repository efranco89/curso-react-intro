import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(props) {
  return (
    <>
      <TodoCounter completed = {props.completedTodos} total = {props.totalTodos} />
      <TodoSearch 
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />

      <TodoList>
        { props.searchedTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => props.completeTodo(todo.id)}
            onDelete={() => props.deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export { AppUI }