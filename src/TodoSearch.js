import './TodoSearch.css'

function TodoSearch(props) {

  return (
    <input 
      className="TodoSearch" 
      placeholder="Cortar Cebolla"
      value={props.searchValue}
      onChange={
        (event) => {
          props.setSearchValue(event.target.value)
        }
      }
    />
  )
}

export { TodoSearch };