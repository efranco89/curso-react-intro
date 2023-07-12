import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';


function AppUI(props) {
  return (
    <>
      <TodoCounter completed = {props.completedTodos} total = {props.totalTodos} />
      <TodoSearch 
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />

      <TodoList>
        { props.loading && (
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        )}
        {props.error && <TodosError/>}
        {(!props.loading && props.searchedTodos.length === 0) && <TodosEmpty/> }

        {props.searchedTodos.map(todo => (
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