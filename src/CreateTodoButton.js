import './CreateTodoButton.css'

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton"
    onClick={
      (event) => {
        props.setCounter(props.contador + 1)
        
      } 
    }
    >+</button>
  )
}

export { CreateTodoButton };