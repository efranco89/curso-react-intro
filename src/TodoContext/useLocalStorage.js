import React from "react";
// This is a custom hook
function useLocalStorage(itemName, initialItem) {
  const [item, setItem] = React.useState(initialItem);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialItem))
          parsedItem = localStorageItem;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 1000)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }

  console.log(item);
  return {item, saveItem, loading, error};
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   { id: 1,text: 'Cortar cebolla', completed: false },
//   { id: 2,text: 'Tomar Curso Introduccion ReactJS', completed: false },
//   { id: 3,text: 'Llorrar con la LLorona', completed: false },
//   { id: 4,text: 'Revisar Correo', completed: false },
//   { id: 5,text: 'Pedir Comida', completed: true },
//   { id: 6,text: 'Fastidiar al Panda', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));