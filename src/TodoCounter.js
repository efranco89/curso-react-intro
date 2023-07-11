// this component receive total and completed as props
function TodoCounter(props) {
  return (
    <h1>
      Has completado { props.completed } de  { props.total } TODOS
    </h1>
  )
}

export { TodoCounter };