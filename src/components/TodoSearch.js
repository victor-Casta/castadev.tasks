import React from 'react';
import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input
    value={searchValue}
    onChange={
      (event) =>
      {
        setSearchValue(event.target.value)
      }
    }
    placeholder="Buscar Tarea" />
  )
}

export { TodoSearch };