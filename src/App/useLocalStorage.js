import React from "react";
// This is a custom hook
function useLocalStorage(itemName, initialItem) {
  
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem = JSON.stringify(initialItem);

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem))
  }
  return [item, saveItem];
}

export { useLocalStorage }