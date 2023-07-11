import React from "react";
import { TodoIcon } from '.'

function DeleteIcon(props){
  return (
    <TodoIcon 
      type="delete"
      color="gray"
      onClick={props.onDelete}
    />
  )
}

export { DeleteIcon }