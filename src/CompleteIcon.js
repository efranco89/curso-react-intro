import React from "react";
import { TodoIcon } from './TodoIcon'

function CompleteIcon(props){
  return (
    <TodoIcon 
      type="check"
      color={props.completed ? 'green' : 'gray'}
      onClick={props.onComplete}
    />
  )
}

export { CompleteIcon }